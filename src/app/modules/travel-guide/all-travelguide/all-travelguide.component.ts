import { Component, OnInit } from '@angular/core';
import { destination } from 'src/app/core/interfaces/destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-all-travelguide',
  templateUrl: './all-travelguide.component.html',
  styleUrls: ['./all-travelguide.component.css']
})
export class AllTravelguideComponent implements OnInit {

  GuidesNames: destination[] = [];
  GuidesContent: any = [];
  id: any;
  constructor(private _destinationPack: HomeserviceService) {}
  ngOnInit(): void {
    this._destinationPack
      .getAlldestination()
      .subscribe((result) => (this.GuidesNames = result.data));
    this._destinationPack.getOneDestinationDetails(5).subscribe((res) => {
      this.GuidesContent = res.data[0].categories[0];

    });
  }


}
