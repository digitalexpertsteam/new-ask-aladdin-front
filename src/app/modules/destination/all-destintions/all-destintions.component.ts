import { Component, OnInit } from '@angular/core';
import { destination } from 'src/app/core/interfaces/destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-all-destintions',
  templateUrl: './all-destintions.component.html',
  styleUrls: ['./all-destintions.component.css']
})
export class AllDestintionsComponent implements OnInit {

  phone:any
  destinationContainer:destination[] = []
  constructor(private _destination:HomeserviceService) { }

  ngOnInit(): void {
    this._destination.getAlldestination().subscribe(result => this.destinationContainer = result.data)
    this._destination.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });
  }

}
