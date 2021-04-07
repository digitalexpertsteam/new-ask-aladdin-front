import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

import { Faqs } from "../../../../interfaces/faqs";
import { HomeserviceService } from "../../../../services/homeservice.service";
import { destination } from "../../../../interfaces/destination";

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
  desName: string = "";
  desSlug: string = "";
  category: string = "";
  title!: String;
  id: any;
  allFaqs: destination[] = [];

  constructor(
    private _faqs: HomeserviceService,
    private _Meta: Meta,
    private _Title: Title
  ) {}

  ngOnInit(): void {
    this.id = localStorage.getItem("id");

    this._faqs.getDestinationFact(this.id).subscribe((result) => {
      this.faqsContainer = result.data;
      this.faqs_name = result.data[0].destination_name + " Facts & Myths";
      this.faqsDes = result.data[0].destination_description;
      this.desName = result.data[0].destination_name;
      this.desSlug = result.data[0].destination_slug;
      this.title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.title}`);
      this._Meta.addTags([
        {
          name: "keywords",
          content: `${result.data[0].destination_seo_keywords}`,
        },
        { name: "robots", content: `${result.data[0].destination_seo_robots}` },
        {
          name: "description",
          content: `${result.data[0].destination_seo_description}`,
        },
      ]);
    });

    this._faqs.getOneDestinationDetails(this.id).subscribe((res) => {
      this.allFaqs = res.data[0].categories;
      this.category = res.data[0].categories[5].slug;
      console.log(this.category);
    });
  }
  setId(id: any) {
    localStorage.setItem("idFaq", id);
  }
}
