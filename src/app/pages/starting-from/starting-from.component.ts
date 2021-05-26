import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  include:any[]=[]

  constructor(private start_form:HomeserviceService,private _active: ActivatedRoute,) { }

  ngOnInit(): void {

    this.id=this._active.snapshot.params.slug;
    this.start_form.getSinglepackage(this.id).subscribe(result => {
      this.start = result.data[0];
      this.include = result.data[0].included;
      


      

      let x = 1
      this.num = result.data[0].days - x

  })}
  

}
