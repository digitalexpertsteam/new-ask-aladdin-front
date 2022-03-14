import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
@Input() cruise = false
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
    if(this.cruise == true ){
      document.getElementById('Gallery')?.scrollIntoView({behavior:'smooth'})
    }
  }
  Optional(){
    document.getElementById('optional')?.scrollIntoView({behavior:'smooth'})

  }
  reviews(){
    document.getElementById('reviews')?.scrollIntoView({behavior:'smooth'})
  }
}
