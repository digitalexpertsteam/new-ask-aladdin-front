import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cruises } from 'src/app/core/interfaces/cruises';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-single-cruises',
  templateUrl: './single-cruises.component.html',
  styleUrls: ['./single-cruises.component.css']
})
export class SingleCruisesComponent implements OnInit {
  cruis1 = true
  cruis2 = true
  type = true
  idCru: any;
  id: any;
  Deafult = `../../../../assets/imgs/7.jpg`
  desSlug: any;
  desName: any;
  cruName: any;
  cruises: any;
  phone: any;
  constructor(public _cruises:HomeserviceService,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.idCru = this.active.snapshot.params.cruis
    this.id = this.active.snapshot.params.id
    this._cruises.getTravelCruises(this.id).subscribe(result => {
      this.desSlug = result.data[0].destination_slug;
      this.desName = result.data[0].destination_name;
      let idName = result.data[0].destination__id;
      this._cruises.getOneDestinationDetails(idName).subscribe(res => {
        this.cruName = res.data[0].categories[3].name
    })
  })

  this._cruises.getSocials().subscribe(result => {
    this.phone = result.data[0].phone1
  });

    this._cruises.getSingleCruise(this.idCru).subscribe(result => {
      this.cruises = result.data[0];

    })
  }

}
