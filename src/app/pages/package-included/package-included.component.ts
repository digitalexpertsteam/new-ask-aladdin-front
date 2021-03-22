import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-package-included',
  templateUrl: './package-included.component.html',
  styleUrls: ['./package-included.component.css']
})
export class PackageIncludedComponent implements OnInit {

  includ:any = [];
  id:any;

  constructor(private included:HomeserviceService) { }

  ngOnInit(): void {
  

  this.included.getTravelGuide(1).subscribe(result => {
    this.includ = result.data[0]
     
    


})}


}
