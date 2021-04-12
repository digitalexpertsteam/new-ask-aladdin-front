import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../../interfaces/hotel';
import { HomeserviceService } from '../../../../services/homeservice.service';

@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['./single-hotel.component.css']
})
export class SingleHotelComponent implements OnInit {
  Itinerary(){
    document.getElementById('Itinerary')?.scrollIntoView({behavior:'smooth'})
  }
  trav(){
    document.getElementById('trav')?.scrollIntoView({behavior:'smooth'})
  }
  
  accomodation(){
    document.getElementById('accomodation')?.scrollIntoView({behavior:'smooth'})
  }
  Services(){
    document.getElementById('Services')?.scrollIntoView({behavior:'smooth'})
  }
  Gallery(){
    document.getElementById('Gallery')?.scrollIntoView({behavior:'smooth'})
  } 
hotel:Hotel[]=[]
id:any
max:any
isReadonly = true;

  constructor(private _hotel:HomeserviceService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("idHotel");
    this._hotel.getSingleHotel(this.id).subscribe(result => {
      this.hotel = result.data;
      console.log(this.hotel);
      
  })}
  

}
