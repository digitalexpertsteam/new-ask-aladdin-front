import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-tour-booking',
  templateUrl: './tour-booking.component.html',
  styleUrls: ['./tour-booking.component.css']
})
export class TourBookingComponent implements OnInit {
  @Input() package = false
  @Input() cruise = false

  idPack: any;
  id:any
  cruiseId:any
  alert:boolean=false
    public profileForm = new FormGroup({
      name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      phone: new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(15)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      comment: new FormControl(null,[Validators.required]),

  //  ,Validators.pattern("^[0-9]*$"),
    });
  idCruise: any;

    constructor(private ngMod:NgbModal ,private _booking:HomeserviceService,private _active: ActivatedRoute) {
    }

    ngOnInit(): void {
      this.idPack = this._active.snapshot.params.slug
      this.idCruise= this._active.snapshot.params.cruis
      if(this.package == true) {
        this._booking.getSinglepackage(this.idPack).subscribe(result => {
          this.id = result.data[0].id



        })
      }
      if(this.cruise == true){
        this._booking.getSingleCruise(this.idCruise).subscribe(result => {

          this.id = result.data[0].id


        })
      }

    }

    openVerticallyCentered(content:any) {
      this.ngMod.open(content, { centered: true });

    }

    openVertically(Trip:any) {
      this.ngMod.open(Trip, { centered: false });

    }

    onSubmit(profileForm: any) {
  if(profileForm.valid==true){
    this._booking.postForm(this.profileForm.value,this.id).subscribe(data=>{
      this.alert=true;
      data = profileForm.value

  })
  }

    }
  }


