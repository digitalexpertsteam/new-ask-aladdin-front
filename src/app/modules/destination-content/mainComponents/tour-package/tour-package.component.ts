import { Component, OnInit } from '@angular/core';
import { destination } from '../../../../interfaces/destination';
import { HomeserviceService } from '../../../../services/homeservice.service';

@Component({
  selector: 'app-tour-package',
  templateUrl: './tour-package.component.html',
  styleUrls: ['./tour-package.component.css']
})
export class TourPackageComponent implements OnInit {
  packageContent:destination[] = []
  constructor(private _pack:HomeserviceService) { }

  ngOnInit(): void {

    this._pack.getOneDestinationDetails(1).subscribe(res => {
      this.packageContent = res.data[0].categories
           
    })
 
  }

}