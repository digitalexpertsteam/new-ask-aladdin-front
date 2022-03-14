import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/core/interfaces/blog';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-single-excursion',
  templateUrl: './single-excursion.component.html',
  styleUrls: ['./single-excursion.component.css']
})
export class SingleExcursionComponent implements OnInit {
  type = true
  lights:any = [];
  banener:any = [];
  contact:any=[];
  idex:any;
  id:any;
  nameEx:any;
  imageEx:any;
  exName:any;
 
  selectTrue = true
  imageFalse= '';
  imageTrue='assets/imgs/right.svg';
  num : any;

  img=[];
  desSlug:any
  included:any=[]
  prices:any
  startPrices:any;
  desName:any;
  reviews:any;
  image = "../../../../../assets/imgs/default-reviews.png"
  max=5;
  isReadonly=true;
  optional:Blog[]=[];

  constructor(public _excursion:HomeserviceService,private _Active:ActivatedRoute, ) { }

  
  ngOnInit(): void {
  // this.startPrices = localStorage.getItem('price')
    // this.idex = localStorage.getItem("idex");
    this.idex = this._Active.snapshot.params.excursion
    this.id = this._Active.snapshot.params.id

    this._excursion.getSingleExcursion(this.idex).subscribe(result => {

      this.included=result.data[0]
      this.nameEx = result.data[0].name
      this.imageEx = result.data[0].banner
      this.reviews = result.data[0].reviews
console.log(this.included);

           
  })

  this._excursion.getDestinationExcursions(this.id).subscribe(result => {
    this.desSlug = result.data[0].destination_slug;
    this.desName =result.data[0].destination_name;
  });
  this._excursion.getOneDestinationDetails(2).subscribe(res => {

    this.exName = res.data[0].categories[2].name  
    
}) 
}
setid(id:any)
{
  localStorage.setItem("idex", id);

}
}
