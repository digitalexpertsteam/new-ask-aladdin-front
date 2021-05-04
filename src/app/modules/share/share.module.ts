import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CollapseModule, MDBBootstrapModule } from "angular-bootstrap-md";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { AccomodationComponent } from "../../pages/accomodation/accomodation.component";
import { AsideComponent } from "../../components/aside/aside.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CarouselModule } from "ngx-owl-carousel-o";
import { CommonModule } from "@angular/common";
import { EgyptSplendorComponent } from "../../pages/egypt-splendor/egypt-splendor.component";
import { ExpertReviewsComponent } from "../../pages/expert-reviews/expert-reviews.component";
import { FormsModule } from "@angular/forms";
import { HightlightesComponent } from "../../pages/hightlightes/hightlightes.component";
import { HttpClient } from "@angular/common/http";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { OptionalExpertsComponent } from "../../pages/optional-experts/optional-experts.component";
import { PackageIncludedComponent } from "../../pages/package-included/package-included.component";
import { PageLinksComponent } from "../../pages/page-links/page-links.component";
import { PricesDatesComponent } from "../../pages/prices-dates/prices-dates.component";
import { RatingModule } from "ngx-bootstrap/rating";
import { SponsorsLogoComponent } from "../../pages/sponsors-logo/sponsors-logo.component";
import { SponsorssComponent } from "../../pages/sponsorss/sponsorss.component";
import { StartingFromComponent } from "../../pages/starting-from/starting-from.component";
import { TagsComponent } from "../../pages/tags/tags.component";
import { TourBookingComponent } from "../../pages/tour-booking/tour-booking.component";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TravExpComponent } from "../../pages/trav-exp/trav-exp.component";

import { IvyGalleryModule } from "angular-gallery";
import { NgxGalleryModule } from "@kolkov/ngx-gallery";
import { DestinationContentRoutingModule } from "../destination-content/destination-content-routing.module";

@NgModule({
  declarations: [
    PageLinksComponent,
    SponsorssComponent,
    AsideComponent,
    OptionalExpertsComponent,
    TourBookingComponent,
    StartingFromComponent,
    ExpertReviewsComponent,
    EgyptSplendorComponent,
    HightlightesComponent,
    TagsComponent,
    PackageIncludedComponent,
    PricesDatesComponent,
    TravExpComponent,
    AccomodationComponent,
    SponsorsLogoComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    IvyCarouselModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    RatingModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),

    DestinationContentRoutingModule,


    IvyGalleryModule,
    NgxGalleryModule,

  ],

  exports: [
    PageLinksComponent,
    SponsorssComponent,
    AsideComponent,
    CarouselModule,
    TourBookingComponent,
    StartingFromComponent,
    ExpertReviewsComponent,
    EgyptSplendorComponent,
    HightlightesComponent,
    TagsComponent,
    PackageIncludedComponent,
    PricesDatesComponent,
    TravExpComponent,
    AccomodationComponent,
    SponsorsLogoComponent,

    RatingModule,
    FormsModule,
    IvyGalleryModule,
    NgxGalleryModule,

  ],
})
export class ShareModule {}
//ngx-translate
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
