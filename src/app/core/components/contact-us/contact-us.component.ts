import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contact:any
  constructor(public contactsUs:HomeserviceService,) { }

  ngOnInit(): void {
    this.contactsUs.getSocials().subscribe(result => {
      this.contact = result.data[0]
    });
  }

}
