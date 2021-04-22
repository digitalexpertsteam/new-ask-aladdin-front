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
  flag:any;
  showed=[]
  show=[{img:``, link:``}]
  constructor( private _sponsors:HomeserviceService) { }

  ngOnInit(): void {
    this._sponsors.getLogo().subscribe(result => {
      this.logo = result.data;
      
      this.logo.forEach(s=>{
         
        if(s.showed_on_large_slider==true){
           
          this.show.push({img:`${s.large_image}`,link:`${s.link}`} )
          
          
        }else{
          null
        }
      })

})
  }

}
