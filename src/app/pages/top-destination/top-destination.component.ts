import { Component, OnInit } from '@angular/core';
import { destination } from '../../interfaces/destination';
import { HomeserviceService } from '../../services/homeservice.service';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-top-destination',
  templateUrl: './top-destination.component.html',
  styleUrls: ['./top-destination.component.css']
})
export class TopDestinationComponent implements OnInit {

  destinationContainer:destination[] = [];

  constructor(private _destination:HomeserviceService,public router :Router) { }

  ngOnInit(): void {
    this._destination.getAlldestination().subscribe(result => this.destinationContainer = result.data)
  }
  setId(id:any){
    localStorage.setItem("id", id);
  }
}
