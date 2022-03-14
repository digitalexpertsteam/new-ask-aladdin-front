import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() cruise = false;
  @Input() package = false;
  isReadonly=true;
  isReadMore = true
  idPack:any;
  id:any;
  image = "../../../../../assets/imgs/default-reviews.png"
  max=5;
  reviews:any;
  reviewsCruise:any;
  idCruise: any;

  showText() {
     this.isReadMore = !this.isReadMore
  }
  constructor(public reviewsTemp: HomeserviceService, private _active: ActivatedRoute) { }
  ngOnInit(): void {
    this.idPack = this._active.snapshot.params.slug
    this.id = this._active.snapshot.params.id
    this.idCruise = this._active.snapshot.params.cruis
    if(this.package == true ){
      this.reviewsTemp.getSinglepackage(this.idPack).subscribe(result => {

        this.reviews = result.data[0].reviews
      })
    }

    if(this.cruise == true ){
      this.reviewsTemp.getSingleCruise(this.idCruise).subscribe(result => {

        this.reviewsCruise = result.data[0].reviews

      })
    }




  }

}
