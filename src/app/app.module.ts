import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule , BrowserTransferStateModule, Meta, Title } from '@angular/platform-browser';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DestinationRoutingModule } from './modules/destination/destination-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelPackageRoutingModule } from './modules/travel-package/travel-package-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TravelCruisesRoutingModule } from './modules/travel-cruises/travel-cruises-routing.module';
import { TravelExcursionRoutingModule } from './modules/travel-excursion/travel-excursion-routing.module';
import { TravelGuideRoutingModule } from './modules/travel-guide/travel-guide-routing.module';
import { BlogsRoutingModule } from './modules/blogs/blogs-routing.module';
import { FaqsRoutingModule } from './modules/faqs/faqs-routing.module';
import { AboutUsComponent } from './core/components/about-us/about-us.component';
import { ContactUsComponent } from './core/components/contact-us/contact-us.component';
import { OurStoryComponent } from './core/components/our-story/our-story.component';
import { MeetTheTeamComponent } from './core/components/meet-the-team/meet-the-team.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { PrivacyPolicyComponent } from './core/components/privacy-policy/privacy-policy.component';
import { HotelsRoutingModule } from './modules/hotels/hotels-routing.module';
import { RedirectUrlComponent } from './core/components/redirect-url/redirect-url.component';
import { PagesRoutingModule } from './modules/pages/pages-routing.module';
import { CookiesComponent } from './core/components/cookies/cookies.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    OurStoryComponent,
    MeetTheTeamComponent,
    PrivacyPolicyComponent,
    RedirectUrlComponent,
    CookiesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserTransferStateModule,
    DestinationRoutingModule,
    TravelPackageRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader:{
        provide:TranslateLoader,
        useFactory: crateTranslateLoader,
        deps:[HttpClient]
      }
    }),
    BsDropdownModule.forRoot(),
    TravelCruisesRoutingModule,
    TravelExcursionRoutingModule,
    TravelGuideRoutingModule,
    BlogsRoutingModule,
    FaqsRoutingModule,
    NgxGalleryModule,
    HotelsRoutingModule,
    PagesRoutingModule,
    NgxSpinnerModule
  ],
  exports:[
  ],
  providers: [Title, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function crateTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http, "./assets/i18n/",".json")
}
