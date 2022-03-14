import { Component, OnInit } from '@angular/core';
import { Pages } from '../../interfaces/pages';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  singlePageContent:Pages[]=[];
  phone:any

  constructor(private _page : HomeserviceService ,) { }

  ngOnInit(): void {
    this._page.getSinglePage(`privacy-policy`).subscribe(res => {
      this.singlePageContent = res.data
    })
    this._page.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });
}}
