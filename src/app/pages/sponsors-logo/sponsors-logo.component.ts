import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';
import { sponsors } from '../../interfaces/sponsors';



@Component({
  selector: 'app-sponsors-logo',
  templateUrl: './sponsors-logo.component.html',
  styleUrls: ['./sponsors-logo.component.css']
})
export class SponsorsLogoComponent implements OnInit {

  logo:sponsors[]=[]
  constructor( private _sponsors:HomeserviceService) { }

  ngOnInit(): void {
    this._sponsors.getLogo().subscribe(result => {
      this.logo = result.data;
      console.log(this.logo);
      

})
  }

}
