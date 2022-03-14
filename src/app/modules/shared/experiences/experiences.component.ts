import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  @Input() cruise = false;
  @Input() package = false;
  ex:any = [];
  id:any
  cruises: any;
  cruiseID: any;
  constructor(private experiance:HomeserviceService,private _active: ActivatedRoute,) { }


  ngOnInit(): void {

    this.id=this._active.snapshot.params.slug
    this.cruiseID =this._active.snapshot.params.cruis

    if(this.package == true){
      this.experiance.getSinglepackage(this.id).subscribe(result => {
        this.ex = result.data[0]

    })
    }

    if(this.cruise == true){
      this.experiance.getSingleCruise(this.cruiseID).subscribe(result => {
        this.cruises = result.data[0];

      })
    }


}
  }
