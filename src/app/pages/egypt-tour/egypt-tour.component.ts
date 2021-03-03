import { Component, OnInit } from '@angular/core';
import { packages } from 'src/app/interfaces/package';

import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-egypt-tour',
  templateUrl: './egypt-tour.component.html',
  styleUrls: ['./egypt-tour.component.css']
})
export class EgyptTourComponent implements OnInit {

  packageContainer:packages[] = []
  constructor(private _package:HomeserviceService) { }

  ngOnInit(): void {
    this._package.getPackages().subscribe(result => this.packageContainer = result.data)
  }

}
