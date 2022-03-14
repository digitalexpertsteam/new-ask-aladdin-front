import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/core/interfaces/hotel';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-start-from',
  templateUrl: './start-from.component.html',
  styleUrls: ['./start-from.component.css']
})
export class StartFromComponent implements OnInit {
  start:any = [];
  max=5;
  isReadonly=true
  num : any;
  id:any
  includeds:any[]=[]
  idCru: any;
  cruises: any;
  rates:Hotel[]=[]
  excursion: any;
  startPrices: any;
  constructor(private start_form:HomeserviceService,private _active: ActivatedRoute,) { }
  @Input() cruise = false
  @Input() package = false
  @Input() excure = false
  ngOnInit(): void {

    this.id=this._active.snapshot.params.slug;
    this.idCru = this._active.snapshot.params.cruis;
    this.excursion = this._active.snapshot.params.excursion;
    if(this.package == true)
    this.start_form.getSinglepackage(this.id).subscribe(result => {
      this.start = result.data[0];
      this.includeds = result.data[0].included;
      let x = 1
      this.num = result.data[0].days - x
  })


  if(this.cruise == true){
    this.start_form.getSingleCruise(this.idCru).subscribe(result => {
      this.cruises = result.data[0];
      this.rates = result.data[0].rate
    })
  }

  if(this.excure == true){
    this.startPrices = localStorage.getItem('price')

    this.start_form.getSingleExcursion(this.excursion).subscribe(result => {
      this.includeds = result.data[0].included;
    })
  }

}
}

