import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-optional-experts',
  templateUrl: './optional-experts.component.html',
  styleUrls: ['./optional-experts.component.css']
})
export class OptionalExpertsComponent implements OnInit {

  constructor(private _experts: HomeserviceService) { }

  id: any;
  experts: any = [];

  ngOnInit(): void {


    this.id = localStorage.getItem("id");
    this._experts.getTravelGuide(this.id).subscribe(result => {
      this.experts = result.data[0];
      console.log(this.experts);
      

     

  })
  }

}
