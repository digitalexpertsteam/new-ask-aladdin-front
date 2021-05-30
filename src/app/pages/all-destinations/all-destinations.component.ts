import { Component, OnInit } from '@angular/core';
import { destination } from '../../interfaces/destination';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-all-destinations',
  templateUrl: './all-destinations.component.html',
  styleUrls: ['./all-destinations.component.css']
})
export class AllDestinationsComponent implements OnInit {
 
  phone:any
  destinationContainer:destination[] = []
  constructor(private _destination:HomeserviceService) { }

  ngOnInit(): void {
    this._destination.getAlldestination().subscribe(result => this.destinationContainer = result.data)
    this._destination.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });
  }
  setId(id:any){
    localStorage.setItem("id", id);
    
    
  }
}
 