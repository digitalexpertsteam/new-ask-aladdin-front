import { Component, OnInit } from '@angular/core';
import { destination } from '../../interfaces/destination';
import { socials } from '../../interfaces/socials';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isDropup = true;
  destinationContainer:destination[]=[];
  packagesName:any;
  guidesSlug:any;
  date = new Date();
  socialsContainer:socials[] = []
  constructor(private _footer:HomeserviceService) { }

  ngOnInit(): void {
    this._footer.getSocials().subscribe(result => this.socialsContainer = result.data)

    this._footer.getAlldestination().subscribe(result => this.destinationContainer = result.data)
    
    this._footer.getOneDestinationContent().subscribe(result => {
      this.packagesName = result.data[0].page_content[1]
      this.guidesSlug = result.data[0].page_content[0]
      
      
    })
  }
  setId(id:any){
    localStorage.setItem("id" , id)
    console.log(id);
    
  }
}
