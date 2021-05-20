import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  us:any
  constructor(public contact:HomeserviceService,) { }

  ngOnInit(): void {
    this.contact.getSocials().subscribe(result => {
      this.us = result.data[0]
    });
  }

}
