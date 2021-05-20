import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { destination } from '../../../../interfaces/destination';
import { HomeserviceService } from '../../../../services/homeservice.service';

@Component({
  selector: 'app-tour-package',
  templateUrl: './tour-package.component.html',
  styleUrls: ['./tour-package.component.css']
})
export class TourPackageComponent implements OnInit {
  packageContent:destination[] = []
  packName:any;
  desName:any;
  id:any;
  desSlug:any;
  phone:any
  constructor(private _pack:HomeserviceService ,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this._pack.getSocials().subscribe(result => {
      this.phone = result.data[0].phone1
    });
    this.id = this.active.snapshot.params.slug
    console.log(this.id);
    
    this._pack.getSingleDestination(this.id).subscribe(res => {
      this.desName = res.data[0].destination_name
      this.desSlug = res.data[0].destination_slug
    })
    this._pack.getOneDestinationDetails(1).subscribe(res => {
      this.packageContent = res.data[0].categories
      this.packName = res.data[0].categories[1].name
           
    })
 
  }
  

}