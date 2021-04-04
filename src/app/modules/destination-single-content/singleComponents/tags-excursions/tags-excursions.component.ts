import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-excursions',
  templateUrl: './tags-excursions.component.html',
  styleUrls: ['./tags-excursions.component.css']
})
export class TagsExcursionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Itinerary(){
    document.getElementById('Itinerary')?.scrollIntoView({behavior:'smooth'})
  }



  Included(){
    document.getElementById('included')?.scrollIntoView({behavior:'smooth'})
  }
  prices(){
    document.getElementById('prices')?.scrollIntoView({behavior:'smooth'})
  }
  trav(){
    document.getElementById('trav')?.scrollIntoView({behavior:'smooth'})
  }
  
  accomodation(){
    document.getElementById('accomodation')?.scrollIntoView({behavior:'smooth'})
  }
  highlights(){
    document.getElementById('highlights')?.scrollIntoView({behavior:'smooth'})
  }

  videos(){
    document.getElementById('videos')?.scrollIntoView({behavior:'smooth'})
  }
  

}
