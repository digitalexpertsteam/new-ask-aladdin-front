import { Component, OnInit } from '@angular/core';
import { destination } from 'src/app/core/interfaces/destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-top-destination',
  templateUrl: './top-destination.component.html',
  styleUrls: ['./top-destination.component.css']
})
export class TopDestinationComponent implements OnInit {

  destinationContainer:destination[] = [];

  constructor(private _destination:HomeserviceService,) { }

  ngOnInit(): void {
    this._destination.getAlldestination().subscribe(result => this.destinationContainer = result.data)
  }
 
}
