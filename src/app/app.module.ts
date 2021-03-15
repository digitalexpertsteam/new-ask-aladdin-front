import { BrowserModule , Title , Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
// components & pages
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
import { TourPackageComponent } from './components/tour-package/tour-package.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeSliderComponent } from './pages/home-slider/home-slider.component';
import { AsideComponent } from './components/aside/aside.component';
import { AccomodationComponent } from './pages/accomodation/accomodation.component';
import { BlogComponent } from './pages/blog/blog.component';
import { EgyptSplendorComponent } from './pages/egypt-splendor/egypt-splendor.component';
import { EgyptTourComponent } from './pages/egypt-tour/egypt-tour.component';
import { ExpertReviewsComponent } from './pages/expert-reviews/expert-reviews.component';
import { FilterByComponent } from './pages/filter-by/filter-by.component';
import { HightlightesComponent } from './pages/hightlightes/hightlightes.component';
import { OptionalExpertsComponent } from './pages/optional-experts/optional-experts.component';
import { PricesDatesComponent } from './pages/prices-dates/prices-dates.component';
import { RelatedToursComponent } from './pages/related-tours/related-tours.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { StartingFromComponent } from './pages/starting-from/starting-from.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { TopDestinationComponent } from './pages/top-destination/top-destination.component';
import { TourBookingComponent } from './pages/tour-booking/tour-booking.component';
import { TourSliderComponent } from './pages/tour-slider/tour-slider.component';
import { VerfiedAgentComponent } from './pages/verfied-agent/verfied-agent.component';
import { WhyAskComponent } from './pages/why-ask/why-ask.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TravelGuideComponent } from './components/travel-guide/travel-guide.component';
import { SiteGuideComponent } from './pages/site-guide/site-guide.component';
import { CityGuideComponent } from './pages/city-guide/city-guide.component';
import { TravelTipsComponent } from './pages/travel-tips/travel-tips.component';
import { PageLinksComponent } from './pages/page-links/page-links.component';
import { SecondBannerComponent } from './pages/second-banner/second-banner.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { TagsComponent } from './pages/tags/tags.component';
import { TravExpComponent } from './pages/trav-exp/trav-exp.component';
import { PackageIncludedComponent } from './pages/package-included/package-included.component';
import { PackageDetailsComponent } from './pages/package-details/package-details.component';
import { SponsorsLogoComponent } from './pages/sponsors-logo/sponsors-logo.component';
import { AllDestinationsComponent } from './pages/all-destinations/all-destinations.component';
import { SponsorssComponent } from './pages/sponsorss/sponsorss.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

// ngx bootstrap & Angular matrial modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RatingModule } from 'ngx-bootstrap/rating';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from './pipes/safe-url.pipe';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AllBlogsComponent } from './pages/all-blogs/all-blogs.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DestinationBlogComponent } from './pages/destination-blog/destination-blog.component';
import { OneDestinationComponent } from './pages/one-destination/one-destination.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourDetailsComponent,
    TourPackageComponent,
    NavbarComponent,
    FooterComponent,
    HomeSliderComponent,
    AsideComponent,
    AccomodationComponent,
    BlogComponent,
    EgyptSplendorComponent,
    EgyptTourComponent,
    ExpertReviewsComponent,
    FilterByComponent,
    HightlightesComponent,
    OptionalExpertsComponent,
    PricesDatesComponent,
    RelatedToursComponent,
    ReviewsComponent,
    StartingFromComponent,
    TestimonialsComponent,
    TopDestinationComponent,
    TourBookingComponent,
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
    PageLinksComponent,
    SecondBannerComponent,
    SponsorsComponent,
    TagsComponent,
    TravExpComponent,
    PackageIncludedComponent,
    PackageDetailsComponent,
    SponsorsLogoComponent,
    AllDestinationsComponent,
    SponsorssComponent,
    SafePipe,
    AllBlogsComponent,
    PrivacyPolicyComponent,
    SingleBlogComponent,
    OurStoryComponent,
    ContactUsComponent,
    DestinationBlogComponent,
    OneDestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CarouselModule ,
    IvyCarouselModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    RatingModule.forRoot(),
    BsDatepickerModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    NgbModule,

  ],
  providers: [Title , Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
