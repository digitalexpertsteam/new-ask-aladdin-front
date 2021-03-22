import { Component, OnInit } from '@angular/core';
import { socials } from '../../interfaces/socials';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isDropup = true;

  date = new Date();
  socialsContainer:socials[] = []
  constructor(private _socials:HomeserviceService) { }

  ngOnInit(): void {
    this._socials.getSocials().subscribe(result => this.socialsContainer = result.data)
  }

}
