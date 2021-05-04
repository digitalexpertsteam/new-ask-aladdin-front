import { Component, OnInit } from "@angular/core";

import { HomeserviceService } from "../../services/homeservice.service";
import { destination } from "../../interfaces/destination";
import { socials } from "../../interfaces/socials";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  isDropup = true;
  destinationContainer: destination[] = [];
  packagesName: destination[] = [];
  guidesSlug: destination[] = [];
  date = new Date();
  socialsContainer: socials[] = [];
  constructor(private _footer: HomeserviceService) {
    this._footer.getSocials().subscribe((result) => (this.socialsContainer = result.data));

    this._footer .getAlldestination().subscribe((result) => (this.destinationContainer = result.data));
    this._footer.getStaticDes().subscribe((result) => {
      this.packagesName = result.data[0].categories;
      this.guidesSlug = result.data[0].categories;
    });
  }
  id: any;
  ngOnInit(): void {}
  setId(id: any) {
    localStorage.setItem("id", id);
  }
}
