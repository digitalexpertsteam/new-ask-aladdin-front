import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

import { Faqs } from "../../../../interfaces/faqs";
import { HomeserviceService } from "../../../../services/homeservice.service";
import { destination } from "../../../../interfaces/destination";

import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-travel-facts-des",
  templateUrl: "./travel-facts-des.component.html",
  styleUrls: ["./travel-facts-des.component.css"],
})
export class TravelFactsDesComponent implements OnInit {
  faqsContainer: Faqs[] = [];
  faqs_name: any;
  blogBanner: string = `../../../assets/imgs/5b14a68e3de5a.jpg`;
  faqsDes: string = "";
  open: boolean = false;
  plus = `plus`
  minus = `minus`
  desName: string = "";
  desSlug: string = "";

  faName:any;
  phone:any
  category: string = "";
  Title!: String;
  id: any;
  allFaqs: destination[] = [];

  constructor(
    private _faqs: HomeserviceService,

    private _Active:ActivatedRoute,

    private _Meta: Meta,
    private _Title: Title
  ) {}

  ngOnInit(): void {

    this.id = this._Active.snapshot.params.slug
 

    this._faqs.getDestinationFact(this.id).subscribe((result) => {
      this.faqsContainer = result.data;
      this.faqs_name = result.data[0].destination_name + " Facts & Myths";
      this.faqsDes = result.data[0].destination_description;
      this.desName = result.data[0].destination_name;
      this.desSlug = result.data[0].destination_slug;
      let idfaq = result.data[0].destination__id;
      this._faqs.getOneDestinationDetails(idfaq).subscribe((res) => {
        this.allFaqs = res.data[0].categories;
        this.faName = res.data[0].categories[5].name
        this.category = res.data[0].categories[5].slug;
      });
      this._faqs.getSocials().subscribe(result => {
        this.phone = result.data[0].phone1
      });
      this.Title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.Title}`);
      this._Meta.addTags([
        { name: "keywords", content: `${result.data[0].destination_seo_keywords}`,},
        { name: "robots", content: `${result.data[0].destination_seo_robots}`},
        { name: "description", content: `${result.data[0].destination_seo_description}`,},
        { name: 'facebook:description', content: `${result.data[0].destination_facebook_description}` },
        { name: 'twitter:title', content: `${result.data[0].destination_twitter_title}` },
        { name: 'twitter:description', content: `${result.data[0].destination_twitter_description}` },
        { name: 'twitter:image', property:"og:image", content: `${result.data[0].destination_twitter_image}` },
        { name: 'facebook:image', property:"og:image", content: `${result.data[0].destination_facebook_image}` },
      ]);
    });

    
  }
  setId(id: any) {
    localStorage.setItem("idFaq", id);
  }
  openPlus(i:any){
    i=!this.open
    this.open = !this.open    
  }
}
