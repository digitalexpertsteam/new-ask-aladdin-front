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

  constructor(private start_form:HomeserviceService) { }

  ngOnInit(): void {

    
    this.start_form.getTravelGuide(1).subscribe(result => {
      this.start = result.data[0];
      let x = 1
      this.num = result.data[0].days - x

  })}
  

}
