import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-hightlightes.',
  templateUrl: './hightlightes.component.html',
  styleUrls: ['./hightlightes.component.css']
})
export class HightlightesComponent implements OnInit {
  lights:any
  id:any;

  constructor(private highlights:HomeserviceService,private _active: ActivatedRoute,) { }

  ngOnInit(): void {


    this.id = this._active.snapshot.params.slug;
    this.highlights.getSinglepackage(this.id).subscribe(result => {
    this.lights = result.data[0].highlight
    
    
      
     
  

  })}
  }

