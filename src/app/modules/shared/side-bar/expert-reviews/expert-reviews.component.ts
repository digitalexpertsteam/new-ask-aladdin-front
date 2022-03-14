import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-expert-reviews',
  templateUrl: './expert-reviews.component.html',
  styleUrls: ['./expert-reviews.component.css']
})
export class ExpertReviewsComponent implements OnInit {

  constructor(private reviews:HomeserviceService) { }

  side:any=[]
  ngOnInit(): void {
    this.reviews.side().subscribe(result => {

      this.side = result.data;
    })
  }

}