import { Component, OnInit } from '@angular/core';
import { packages } from '../../interfaces/package';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-egypt-tour',
  templateUrl: './egypt-tour.component.html',
  styleUrls: ['./egypt-tour.component.css']
})
export class EgyptTourComponent implements OnInit {

  packageContainer:packages[] = []
  image = "../../../../../assets/imgs/default.png"
  constructor(private _package:HomeserviceService) { }

  ngOnInit(): void {
    this._package.getPackages().subscribe(result => {
      this.packageContainer = result.data
      
    })
  }
  setId(id:any){
    localStorage.setItem('idPack' ,id)
  }

}
