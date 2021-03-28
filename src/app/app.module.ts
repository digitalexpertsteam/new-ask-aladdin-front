import { BrowserModule , Title , Meta } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {MatTabsModule} from '@angular/material/tabs';


// components & pages
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
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
import { SecondBannerComponent } from './pages/second-banner/second-banner.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { TagsComponent } from './pages/tags/tags.component';
import { TravExpComponent } from './pages/trav-exp/trav-exp.component';
import { PackageIncludedComponent } from './pages/package-included/package-included.component';
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
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DestinationBlogComponent } from './pages/destination-blog/destination-blog.component';
import { OneDestinationComponent } from './pages/one-destination/one-destination.component';
import { translate } from '@angular/localize/src/utils';
import { SinglePackageComponent } from './pages/single-package/single-package.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { AllPackagesDestinationComponent } from './components/all-packages-destination/all-packages-destination.component';
import { AllFaqDestinationComponent } from './components/all-faq-destination/all-faq-destination.component';
import { DestinationContentModule } from './modules/destination-content/destination-content.module';
import { ShareModule } from './modules/share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourDetailsComponent,
    NavbarComponent,
    FooterComponent,
    HomeSliderComponent,
    AsideComponent,
    AccomodationComponent,
    BlogComponent,
    EgyptSplendorComponent,
    EgyptTourComponent,
    ExpertReviewsComponent,
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
    SecondBannerComponent,
    SponsorsComponent,
    TagsComponent,
    TravExpComponent,
    PackageIncludedComponent,
    SponsorsLogoComponent,
    AllDestinationsComponent,
    SponsorssComponent,
    PrivacyPolicyComponent,
    SingleBlogComponent,
    OurStoryComponent,
    ContactUsComponent,
    DestinationBlogComponent,
    OneDestinationComponent,
    SinglePackageComponent,
    DashboardComponent,
    AllPackagesDestinationComponent,
    AllFaqDestinationComponent
    
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
    MatTabsModule,
    TabsModule.forRoot(),
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
    DestinationContentModule,
    ShareModule,
  ],
  exports:[SecondBannerComponent,],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
  providers: [Title , Meta],
  bootstrap: [AppComponent]
})


export class AppModule { SecondBannerComponent: any }
//ngx-translate
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}