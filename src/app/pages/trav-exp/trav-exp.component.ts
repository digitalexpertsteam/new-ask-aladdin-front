import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';


@Component({
  selector: 'app-trav-exp',
  templateUrl: './trav-exp.component.html',
  styleUrls: ['./trav-exp.component.css']
})
export class TravExpComponent implements OnInit {

  ex:any = [];
  id:any

  constructor(private experiance:HomeserviceService) { }


  ngOnInit(): void {
    

    this.id=localStorage.getItem('idPack')
    this.experiance.getTravelGuide(this.id).subscribe(result => {
      this.ex = result.data[0]
      
      
  

  })}
  }


