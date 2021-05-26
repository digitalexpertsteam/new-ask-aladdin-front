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

  gallery(){
    document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'})
  }

  highlights(){
    document.getElementById('highlights')?.scrollIntoView({behavior:'smooth'})
  }

  reviews(){
    document.getElementById('reviews')?.scrollIntoView({behavior:'smooth'})
  }

  

}
