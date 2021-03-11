import { Component, OnInit } from '@angular/core';
import { destination } from 'src/app/interfaces/destination';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-one-destination',
  templateUrl: './one-destination.component.html',
  styleUrls: ['./one-destination.component.css']
})
export class OneDestinationComponent implements OnInit {
  id:any;
  singleDestination:destination[]=[]

  constructor( private _Home : HomeserviceService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    // this._Home.getOneDistination(this.id).subscribe(res => {
    //   this.singleDestination = res.data
    //   console.log(res.data);
      
    // })
  }

}
