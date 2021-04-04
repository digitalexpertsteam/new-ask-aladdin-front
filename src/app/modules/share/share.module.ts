import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLinksComponent } from '../../pages/page-links/page-links.component';
import { SponsorssComponent } from '../../pages/sponsorss/sponsorss.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AsideComponent } from '../../components/aside/aside.component';
import { OptionalExpertsComponent } from '../../pages/optional-experts/optional-experts.component';
import { TourBookingComponent } from '../../pages/tour-booking/tour-booking.component';
import { StartingFromComponent } from '../../pages/starting-from/starting-from.component';
import { ExpertReviewsComponent } from '../../pages/expert-reviews/expert-reviews.component';
import { EgyptSplendorComponent } from '../../pages/egypt-splendor/egypt-splendor.component';
import { HightlightesComponent } from '../../pages/hightlightes/hightlightes.component';
import { TagsComponent } from '../../pages/tags/tags.component';
import { PackageIncludedComponent } from '../../pages/package-included/package-included.component';
import { PricesDatesComponent } from '../../pages/prices-dates/prices-dates.component';
import { TravExpComponent } from '../../pages/trav-exp/trav-exp.component';
import { AccomodationComponent } from '../../pages/accomodation/accomodation.component';
import { SponsorsLogoComponent } from '../../pages/sponsors-logo/sponsors-logo.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'angular-bootstrap-md';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';




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
    SponsorsLogoComponent
    
  ],
  imports: [
    CommonModule,
    CarouselModule ,
    IvyCarouselModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    RatingModule.forRoot(),
    TranslateModule.forRoot(
      {
        defaultLanguage: 'en',
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
        }
    }
    ),



  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[
    PageLinksComponent, 
    SponsorssComponent, 
    AsideComponent,
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
    
  ]
})
export class ShareModule {}
//ngx-translate
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}