import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { singleDestination } from '../../../../interfaces/single-destination';
import { HomeserviceService } from '../../../../services/homeservice.service';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `,
  ], 

})
export class PackageDetailsComponent implements OnInit {
  max = 5;
  rate = 3;
  count:any

  isReadonly = false;
  overStar: number | undefined;
  percent: number | undefined;
  modalService: any;
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;}
  image = "../../../../../../../assets/imgs/default.png"
  id:any;
  idpackage:any
  nameCountry = '';
  destinationContainer:singleDestination[] = []
  Title:any;
  category: string = ''; 
  x:number=1;
  hot:any[]=[]
  descount:any

  resetStar(): void {
    this.overStar = void 0;
  }
  constructor(private _singleDes:HomeserviceService, private sanitizer:DomSanitizer ,
     private _Meta : Meta ,
      private _Title : Title ,
      private _active:ActivatedRoute , 
      private ngMod:NgbModal) { }

  ngOnInit(): void {
    this.id = this._active.snapshot.params.slug
    
    this._singleDes.getSingleDestination(this.id).subscribe(result =>{
      this.destinationContainer = result.data
      

      this.descount= result.data.discount+"%"


      this.hot = result.data.hot_offer

      this.nameCountry = result.data[0].destination_name;
      this.count = result.data.length
      this.Title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.Title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data[0].destination_seo_keywords}` },
	      { name: 'robots', content: `${result.data[0].destination_seo_robots}` },
        { name: 'description', content: `${result.data[0].destination_seo_description}` },
        { name: 'facebook:description', content: `${result.data[0].destination_facebook_description}` },
        { name: 'twitter:title', content: `${result.data[0].destination_twitter_title}` },
        { name: 'twitter:description', content: `${result.data[0].destination_twitter_description}` },
        { name: 'twitter:image', property:"og:image", content: `${result.data[0].destination_twitter_image}` },
        { name: 'facebook:image', property:"og:image", content: `${result.data[0].destination_facebook_image}` },

      ]);
      
      
    })
    this._singleDes.getOneDestinationDetails(this.id).subscribe(res => {
        this.category = res.data[0].categories[1].slug    
        
    })
  }
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  setId(id:any){
    localStorage.setItem('idPack' , id)
    
    
    
  }
  openVerticallyCentered(content:any) {
    this.ngMod.open(content, { centered: true });
    console.log(content);
    
  }
}