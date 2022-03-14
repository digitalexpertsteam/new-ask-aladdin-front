import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { singleDestination } from 'src/app/core/interfaces/single-destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-catergory',
  templateUrl: './catergory.component.html',
  styleUrls: ['./catergory.component.css']
})
export class CatergoryComponent implements OnInit {
  Filter:singleDestination[]=[]
  image = "../../../../../../../assets/imgs/default.png"
  count: any;
  descount: any;
  hot: any;
  nameCountry: any;
  Title: any;
  ide: any;
  cat: any;
  id: any;

  constructor(private _singleDes: HomeserviceService, private sanitizer: DomSanitizer ,  private _active: ActivatedRoute ,private ngMod: NgbModal) {
    this.ide = this._active.snapshot.params.categoreyId
      this.cat = this._active.snapshot.params.categorySlug
      this.id = this._active.snapshot.params.slug
   }

  ngOnInit(): void {
    this._singleDes.getSingleDestinationFilter(this.id , 0 ,10000,1,30,1,5).subscribe(result => {
      this.Filter = result.data
      this.count = result.data.length


      // this.id , 0 ,10000,this.minDay,this.maxDay,this.minRate,this.MaxRate

      this.descount = result.data.discount + "%"
      this.hot = result.data.hot_offer
      this.nameCountry = result.data[0].destination_name;
    })
  }

  openVerticallyCentered(content: any) {
    this.ngMod.open(content, { centered: true });


  }
}
