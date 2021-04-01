import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../../services/homeservice.service';


@Component({
  selector: 'app-starting-from',
  templateUrl: './starting-from.component.html',
  styleUrls: ['./starting-from.component.css']
})
export class StartingFromComponent implements OnInit {

  start:any = [];
  num : any;
  id:any
  img:any=[]
  constructor(private start_form:HomeserviceService) { }

  ngOnInit(): void {


    this.id=localStorage.getItem('idPack')
    this.start_form.getTravelGuide(this.id).subscribe(result => {
      this.start = result.data[0];
      let x = 1
      this.num = result.data[0].days - x

    
      this.start_form.getTravelGuide(this.id).subscribe(result => {
        this.img = result.data[0].related_packages.thumb;
        console.log(this.img);
        

  
    })

  })}
  

}
