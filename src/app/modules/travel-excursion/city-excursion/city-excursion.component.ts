import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { destination } from 'src/app/core/interfaces/destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-city-excursion',
  templateUrl: './city-excursion.component.html',
  styleUrls: ['./city-excursion.component.css']
})
export class CityExcursionComponent implements OnInit {
  phone: any;
  id: any
  citys:any
  singleDestination:destination[]=[]

  constructor(private _excursions: HomeserviceService, private _Active:ActivatedRoute, private sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
    this.id = this._Active.snapshot.params.slug;
    console.log(this.id);

    this._excursions.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });

    this._excursions.ExcursionCity(this.id).subscribe(result => {
      this.citys = result.data;



    })


  }

  }
