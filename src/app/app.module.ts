import { BrowserModule, Meta, Title } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AccomodationComponent } from "./pages/accomodation/accomodation.component";
import { AllDestinationsComponent } from "./pages/all-destinations/all-destinations.component";
import { AllFaqDestinationComponent } from "./components/all-faq-destination/all-faq-destination.component";
import { AllPackagesDestinationComponent } from "./components/all-packages-destination/all-packages-destination.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AsideComponent } from "./components/aside/aside.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CarouselModule } from "ngx-owl-carousel-o";
import { CityGuideComponent } from "./pages/city-guide/city-guide.component";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { DashboardComponent } from "./shared/dashboard/dashboard.component";
import { DestinationBlogComponent } from "./pages/destination-blog/destination-blog.component";
import { DestinationContentModule } from "./modules/destination-content/destination-content.module";
import { DestinationSingleContentModule } from "./modules/destination-single-content/destination-single-content.module";
import { EgyptSplendorComponent } from "./pages/egypt-splendor/egypt-splendor.component";
import { EgyptTourComponent } from "./pages/egypt-tour/egypt-tour.component";
import { ExpertReviewsComponent } from "./pages/expert-reviews/expert-reviews.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./shared/header/header.component";
import { HightlightesComponent } from "./pages/hightlightes/hightlightes.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeSliderComponent } from "./pages/home-slider/home-slider.component";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { LoginComponent } from "./pages/login/login.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OneDestinationComponent } from "./pages/one-destination/one-destination.component";
import { OptionalExpertsComponent } from "./pages/optional-experts/optional-experts.component";
import { OurStoryComponent } from "./pages/our-story/our-story.component";
import { PackageIncludedComponent } from "./pages/package-included/package-included.component";
import { PricesDatesComponent } from "./pages/prices-dates/prices-dates.component";
import { PrivacyPolicyComponent } from "./pages/privacy-policy/privacy-policy.component";
import { RatingModule } from "ngx-bootstrap/rating";
import { RegisterComponent } from "./pages/register/register.component";
import { RelatedToursComponent } from "./pages/related-tours/related-tours.component";
import { ReviewsComponent } from "./pages/reviews/reviews.component";
import { SecondBannerComponent } from "./pages/second-banner/second-banner.component";
import { ShareModule } from "./modules/share/share.module";
import { SinglePackageComponent } from "./pages/single-package/single-package.component";
import { SiteGuideComponent } from "./pages/site-guide/site-guide.component";
import { SponsorsComponent } from "./pages/sponsors/sponsors.component";
import { SponsorsLogoComponent } from "./pages/sponsors-logo/sponsors-logo.component";
import { StartingFromComponent } from "./pages/starting-from/starting-from.component";
import { TagsComponent } from "./pages/tags/tags.component";
import { TestimonialsComponent } from "./pages/testimonials/testimonials.component";
import { TopDestinationComponent } from "./pages/top-destination/top-destination.component";
import { TourBookingComponent } from "./pages/tour-booking/tour-booking.component";
import { TourDetailsComponent } from "./modules/destination-single-content/singleComponents/tour-details/tour-details.component";
import { TourSliderComponent } from "./pages/tour-slider/tour-slider.component";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TravExpComponent } from "./pages/trav-exp/trav-exp.component";
import { TravelGuideComponent } from "./components/travel-guide/travel-guide.component";
import { TravelTipsComponent } from "./pages/travel-tips/travel-tips.component";
import { VerfiedAgentComponent } from "./pages/verfied-agent/verfied-agent.component";
import { WhyAskComponent } from "./pages/why-ask/why-ask.component";
import {IvyGalleryModule} from 'angular-gallery';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { SingleCruisesComponent } from './pages/single-cruises/single-cruises.component';
 import { CountUpModule } from 'ngx-countup';
import { SinglePageComponent } from './pages/single-page/single-page.component';
import { PageComponent } from './pages/page/page.component';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { CategoreyFooterComponent } from './shared/categorey-footer/categorey-footer.component';


// components & pages



// ngx bootstrap & Angular matrial modules



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // TourDetailsComponent,
    NavbarComponent,
    FooterComponent,
    HomeSliderComponent,
    // AccomodationComponent,
    BlogComponent,
    // EgyptSplendorComponent,
    EgyptTourComponent,
    // ExpertReviewsComponent,
    // HightlightesComponent,
    // OptionalExpertsComponent,
    // PricesDatesComponent,
    RelatedToursComponent,
    // ReviewsComponent,
    // StartingFromComponent,
    TestimonialsComponent,
    TopDestinationComponent,
    // TourBookingComponent,
    TourSliderComponent,
    VerfiedAgentComponent,
    WhyAskComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    TravelGuideComponent,
    SiteGuideComponent,
    CityGuideComponent,
    TravelTipsComponent,
    SecondBannerComponent,
    SponsorsComponent,
    // TagsComponent,
    // TravExpComponent,
    // PackageIncludedComponent,
    // SponsorsLogoComponent,
    AllDestinationsComponent,
    // SponsorssComponent,
    PrivacyPolicyComponent,
    OurStoryComponent,
    ContactUsComponent,
    DestinationBlogComponent,
    OneDestinationComponent,
    SinglePackageComponent,
    DashboardComponent,
    AllPackagesDestinationComponent,
    AllFaqDestinationComponent,
    SingleCruisesComponent,
    SinglePageComponent,
    PageComponent,
    CategoreyFooterComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CarouselModule,
    MDBBootstrapModule.forRoot(),
    IvyCarouselModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    RatingModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgbModule,
    NgxSpinnerModule,
    AccordionModule,
    IvyGalleryModule,
    NgxGalleryModule,
    CountUpModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),

    ShareModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [Title, Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}
//ngx-translate
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
