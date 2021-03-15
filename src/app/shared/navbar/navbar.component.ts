import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarCollapsed:boolean = true;
  ngOnInit(): void {}
  

  
  constructor(public _HomeserviceService:HomeserviceService) {

}

  
}
