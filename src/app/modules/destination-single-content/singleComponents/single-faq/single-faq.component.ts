import { Component, OnInit } from "@angular/core";

import { Faq } from "../../../../interfaces/faq";
import { Faqs } from "../../../../interfaces/faqs";
import { HomeserviceService } from "../../../../services/homeservice.service";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-single-faq",
  templateUrl: "./single-faq.component.html",
  styleUrls: ["./single-faq.component.css"],
})
export class SingleFaqComponent implements OnInit {
  singleFaq: Faq[] = [];
  idFaq: any;
  id: any;
  alldestinationCards: Faqs[] = [];
  desSlug = "";

  constructor(public _homeService: HomeserviceService) {}

  ngOnInit(): void {
    // Get Id From Loacal Storage
    this.idFaq = localStorage.getItem("idFaq");
    this.id = localStorage.getItem("id");
    //  this._ActivatedRoute.snapshot.params.id;
    this._homeService.getSingleFaq(this.idFaq).subscribe((result) => {
      this.singleFaq = result.data;
    });
    this._homeService.getHomeBlog().subscribe((result) => {
      this.desSlug = result.data[0].destination_slug;
    });

    this._homeService.getDestinationFact(this.id).subscribe((res) => {
      this.alldestinationCards = res.data;

      console.log(this.alldestinationCards);
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    pullDrag: true,
    margin: 8,
    dots: false,
    navSpeed: 700,
    navText: ["<", ">"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  setId(id: any) {
    localStorage.setItem("idFaq", id);
  }
}
