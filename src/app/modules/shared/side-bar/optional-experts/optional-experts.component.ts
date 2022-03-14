import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/core/interfaces/blog';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-optional-experts',
  templateUrl: './optional-experts.component.html',
  styleUrls: ['./optional-experts.component.css']
})
export class OptionalExpertsComponent implements OnInit {
  idCruise: any;
  related:Blog[]=[];
  @Input() cruise = false
  @Input() package = false
  @Input() excure = false
  excursions: any;

  constructor(public _optional:HomeserviceService, private _active: ActivatedRoute,  ) { }

  idPack:any;
  id:any;
   optional:Blog[]=[];
   des:any;
   max=5;
   isReadonly=true;
   x:number=1
   ngOnInit(): void {

     this.idPack = this._active.snapshot.params.slug;
     this.idCruise = this._active.snapshot.params.cruis;
     this.excursions = this._active.snapshot.params.excursion;
     this.id = this._active.snapshot.params.id;
     if(this.package == true){
      this._optional.getSinglepackage(this.idPack).subscribe(result => {
        this.optional = result.data[0].related_packages


    })
     }

     if(this.cruise == true) {
      this._optional.getSingleCruise(this.idCruise).subscribe(result => {
        this.related = result.data[0].related_cruises

     })
     }
     if(this.excure == true) {
      this._optional.getSingleExcursion(this.excursions).subscribe(result => {
        this.related = result.data[0].related_excursions

     })
     }


   this._optional.getSingleDestination(this.id).subscribe(result => {
     this.des = result.data[0].destination_slug


     })




 }
   setid(id:any)
   {

     localStorage.setItem('idPack' , id)

   }

 }
