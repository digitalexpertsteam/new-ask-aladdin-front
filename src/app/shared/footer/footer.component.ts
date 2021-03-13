import { Component, OnInit } from '@angular/core';
import { socials } from 'src/app/interfaces/socials';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isDropup = true;
  socialsContainer:socials[] = []
  constructor(private _socials:HomeserviceService) { }

  ngOnInit(): void {
    this._socials.getSocials().subscribe(result => this.socialsContainer = result.data)
  }

}
