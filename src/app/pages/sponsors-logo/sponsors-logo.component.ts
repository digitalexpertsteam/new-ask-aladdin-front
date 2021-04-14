import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';
import { sponsors } from '../../interfaces/sponsors';



@Component({
  selector: 'app-sponsors-logo',
  templateUrl: './sponsors-logo.component.html',
  styleUrls: ['./sponsors-logo.component.css']
})
export class SponsorsLogoComponent implements OnInit {

  logo:sponsors[]=[]
  flag:any
  show:any
  constructor( private _sponsors:HomeserviceService) { }

  ngOnInit(): void {
    this._sponsors.getLogo().subscribe(result => {
      this.logo = result.data;
      
      this.logo.forEach(s=>{
        console.log(s);
        if(s.showed_on_large_slider==true){
          s.large_image = s.small_image_on_slider
        }else{
          null
        }
        
      })
      // console.log(this.show);
      
      


      

})
  }

}
