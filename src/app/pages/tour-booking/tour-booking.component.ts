import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-tour-booking',
  templateUrl: './tour-booking.component.html',
  styleUrls: ['./tour-booking.component.css']
})
export class TourBookingComponent implements OnInit {

  constructor(private ngMod:NgbModal) { }

  ngOnInit(): void {

  }

  openVerticallyCentered(content:any) {
    this.ngMod.open(content, { centered: true });
    console.log(content);
    
  }

  openVertically(Trip:any) {
    this.ngMod.open(Trip, { centered: false });
    console.log(Trip);
    
  }
}
