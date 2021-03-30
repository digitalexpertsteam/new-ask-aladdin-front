import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HomeserviceService } from '../../services/homeservice.service';



@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  lights:any = [];
  banener:any = [];
  contact:any=[];
  Title:any;
  Meta:any;

  id:any
  constructor( public highlights:HomeserviceService , private _Meta : Meta , private _Title : Title ) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("idPack");
    this.highlights.getTravelGuide(this.id).subscribe(result => {
      this.lights = result.data[0]
      this.banener = result.data[0]
      this.contact = result.data[0]
      this.Title = result.data[0].seo_title;
      this._Title.setTitle(`${this.Title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data.seo_keywords}` },
        { name: 'robots', content: `${result.data.seo_robots}` },
        { name: 'description', content: `${result.data.seo_description}`},
      ]);

      
      
  

  })}
  

}
