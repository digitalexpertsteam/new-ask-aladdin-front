import { Component, OnInit } from "@angular/core";

import { HomeserviceService } from "../../services/homeservice.service";
import { destination } from "../../interfaces/destination";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-all-packages-destination",
  templateUrl: "./all-packages-destination.component.html",
  styleUrls: ["./all-packages-destination.component.css"],
})
export class AllPackagesDestinationComponent implements OnInit {
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
