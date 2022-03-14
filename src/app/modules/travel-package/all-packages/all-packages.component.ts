import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { destination } from 'src/app/core/interfaces/destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.css']
})
export class AllPackagesComponent implements OnInit {
  packagesNames: destination[] = [];
  packageContent: destination[] = [];
  id: any;
  constructor(private _destinationPack: HomeserviceService , private active:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.active.snapshot.params.id
    this._destinationPack
      .getAlldestination()
      .subscribe((result) => (this.packagesNames = result.data));

    this._destinationPack.getOneDestinationDetails(1).subscribe((res) => {
      this.packageContent = res.data[0].categories;
    });
  }
  
}
