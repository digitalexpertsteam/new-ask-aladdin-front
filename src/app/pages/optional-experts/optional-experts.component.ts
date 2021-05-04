import { Component, OnInit } from '@angular/core';
import { Blog } from '../../interfaces/blog';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-optional-experts',
  templateUrl: './optional-experts.component.html',
  styleUrls: ['./optional-experts.component.css']
})
export class OptionalExpertsComponent implements OnInit {

  constructor(public _optional:HomeserviceService) { }
 idPack:any;
 id:any;
  optional:Blog[]=[];
  des:any;

  ngOnInit(): void {
    this.idPack = localStorage.getItem("idPack");
    this.id = localStorage.getItem("id");
    this._optional.getSinglepackage(this.idPack).subscribe(result => {
      this.optional = result.data[0].related_packages
  })

  this._optional.getSingleDestination(this.id).subscribe(result => {
    this.des = result.data[0].destination_slug


    })

}
  setid(id:any)
  {

    localStorage.setItem('idPack' , id)

  }

}
