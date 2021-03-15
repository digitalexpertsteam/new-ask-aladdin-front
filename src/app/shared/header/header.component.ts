import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  languages= [ 'En' , 'Ru' , 'Es' , 'De' , 'Fr']
  langText = ''

  constructor() { }

  ngOnInit(): void {
  }
  onClick(i:any){
    this.langText = i.text
  }
}

