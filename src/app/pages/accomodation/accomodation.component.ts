import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {
  desName: any;
  desSlug: any;
  slug: any;

  constructor(private _accomodation:HomeserviceService,private _active: ActivatedRoute) { }

  accomodation:any = [];
  id:any;
  idhotel: any;
  // id pack
  idPack:any
  max = 5;
  isReadonly = true;
  overStar: number | undefined;
  percent: number | undefined;
  flag:any
  
  ngOnInit(): void {

    this.id = this._active.snapshot.params.id
    console.log(this.id);
    
    this.slug = this._active.snapshot.params.slug


    this._accomodation.getSinglepackage(this.slug).subscribe(result => {
      this.accomodation = result.data[0];
      console.log(this.accomodation)
      
      this.flag = result.data[0].hotels

    




  })

  this._accomodation.getSingleDestination(this.id).subscribe(res => {
    this.desName = res.data[0].destination_name
    this.desSlug = res.data[0].destination_slug
  })
}

  

  
  }