import { Component, OnInit } from '@angular/core';
import { Count } from 'src/app/core/interfaces/count';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-verfied-agent',
  templateUrl: './verfied-agent.component.html',
  styleUrls: ['./verfied-agent.component.css']
})
export class VerfiedAgentComponent implements OnInit {
  countNum:Count[]=[];
  Verified : any;
  Tour:any;
  satisfied:any;
  constructor( private _home:HomeserviceService) { 
   
  }

  ngOnInit(): void {
    
  }
  
ngAfterViewInit(): void{
  this._home.Counter().subscribe(res => {
    this.countNum = res.data
    this.Verified = res.data.verified_agent
    this.Tour = res.data.tour_listed
    this.satisfied = res.data.satisfied_customer
  }
  )
}
}
