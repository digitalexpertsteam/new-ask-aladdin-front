import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-page-links',
  templateUrl: './page-links.component.html',
  styleUrls: ['./page-links.component.css']
})
export class PageLinksComponent implements OnInit {



  constructor(private _link:HomeserviceService) { }

  ngOnInit(): void {
  }

}
