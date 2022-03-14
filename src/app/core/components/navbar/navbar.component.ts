import { Component, OnInit } from '@angular/core';
import { destination } from '../../interfaces/destination';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarCollapsed:boolean = true;
  destinationContainer: destination[] = [];


  constructor(public _Navbar:HomeserviceService) { }

  ngOnInit(): void {
    this._Navbar .getAlldestination().subscribe((result) => {
      this.destinationContainer = result.data
    });

  }

}
