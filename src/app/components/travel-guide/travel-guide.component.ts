import { Component, OnInit } from '@angular/core';
import { destination } from '../../interfaces/destination';

import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-travel-guide',
  templateUrl: './travel-guide.component.html',
  styleUrls: ['./travel-guide.component.css']
})
export class TravelGuideComponent implements OnInit {

  GuidesNames: destination[] = [];
  GuidesContent: any = [];
  id: any;
  phone:any
  constructor(private _destinationPack: HomeserviceService) {}
  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    this._destinationPack
      .getAlldestination()
      .subscribe((result) => (this.GuidesNames = result.data));
    this._destinationPack.getOneDestinationDetails(5).subscribe((res) => {
      this.GuidesContent = res.data[0].categories[0];
    });
    this._destinationPack.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });
  }

  setId(id: any) {
    localStorage.setItem("id", id);

  }
}
