import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule } from "ngx-owl-carousel-o";
import { SponsorsLogoComponent } from './sponsors-logo/sponsors-logo.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RatingModule } from "ngx-bootstrap/rating";
import { SafePipe } from 'src/app/core/pipes/safe-url.pipe';
import { CollapseModule } from "ngx-bootstrap/collapse";
import { NgxStarRatingModule } from 'ngx-star-rating';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SplanderComponent } from './splander/splander.component';
import { PackageIncludedComponent } from './package-included/package-included.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { PriceDataComponent } from './price-data/price-data.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StartFromComponent } from './side-bar/start-from/start-from.component';
import { ExpertReviewsComponent } from './side-bar/expert-reviews/expert-reviews.component';
import { OptionalExpertsComponent } from './side-bar/optional-experts/optional-experts.component';
import { TourBookingComponent } from './side-bar/tour-booking/tour-booking.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { TagsComponent } from './tags/tags.component';
import { innerHtmlPipe } from 'src/app/core/pipes/innerHtml.pipe';
import { AccordionModule } from "ngx-bootstrap/accordion";
import { FilterComponent } from './filter/filter.component';
import { SwiperModule } from 'swiper/angular';
import { SlickCarouselModule } from 'ngx-slick-carousel';







@NgModule({
  declarations: [
    SponsorsLogoComponent,
    SponsorsComponent,
    SplanderComponent,
    PackageIncludedComponent,
    SafePipe,
    innerHtmlPipe,
    AccomodationComponent,
    PriceDataComponent,
    ExperiencesComponent,
    SideBarComponent,
    StartFromComponent,
    ExpertReviewsComponent,
    OptionalExpertsComponent,
    TourBookingComponent,
    ReviewsComponent,
    GalleryComponent,
    TagsComponent,
    FilterComponent,

  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    SlickCarouselModule,
    CarouselModule,
    SwiperModule,

    RatingModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader:{
        provide:TranslateLoader,
        useFactory: crateTranslateLoader,
        deps:[HttpClient]

      }
    }),
    CountUpModule,
    NgxStarRatingModule,
    CollapseModule.forRoot(),
    NgxGalleryModule,
    ReactiveFormsModule,
    AccordionModule,

  ],
  exports:[
    NgbModule,
    FormsModule,
    SlickCarouselModule,
    SwiperModule,
    TranslateModule,
    CountUpModule,
    SponsorsLogoComponent,
    AccomodationComponent,
    SponsorsComponent,
    AccordionModule,
    SplanderComponent,
    PriceDataComponent,
    PackageIncludedComponent,
    HttpClientModule,
    ExperiencesComponent,
    CarouselModule,
    SafePipe,
    innerHtmlPipe,
    NgxStarRatingModule,
    ReactiveFormsModule,
    CollapseModule,
    StartFromComponent,
    ExpertReviewsComponent,
    OptionalExpertsComponent,
    TourBookingComponent,
    SideBarComponent,
    ReviewsComponent,
    GalleryComponent,
    TagsComponent,
    NgxGalleryModule,
    FilterComponent,






  ],
})

export class SharedModule { }

export function crateTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http, "../../../../assets/i18n/",".json")
}
