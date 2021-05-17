import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AllBlogsComponent } from "./mainComponents/all-blogs/all-blogs.component";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { CommonModule } from "@angular/common";
import { DestinationContentRoutingModule } from "./destination-content-routing.module";
import { FilterByComponent } from "../../pages/filter-by/filter-by.component";
import { PackageDetailsComponent } from "./mainComponents/package-details/package-details.component";
import { SafePipe } from "../../pipes/safe-url.pipe";
import { ShareModule } from "../share/share.module";
import { TourPackageComponent } from "./mainComponents/tour-package/tour-package.component";
import { TravelCruisesDesComponent } from "./mainComponents/travel-cruises-des/travel-cruises-des.component";
import { TravelExcursionsDesComponent } from "./mainComponents/travel-excursions-des/travel-excursions-des.component";
import { TravelFactsDesComponent } from "./mainComponents/travel-facts-des/travel-facts-des.component";
import { TravelGuideDesComponent } from "./mainComponents/travel-guide-des/travel-guide-des.component";
import { TravelHotelsDesComponent } from "./mainComponents/travel-hotels-des/travel-hotels-des.component";
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { TranslateHttpLoader } from "@ngx-translate/http-loader";


import { RatingModule } from "ngx-bootstrap/rating";
import { HttpClient } from "@angular/common/http";

@NgModule({
  declarations: [
    TravelCruisesDesComponent,
    TravelFactsDesComponent,
    TravelExcursionsDesComponent,
    TravelGuideDesComponent,
    TravelHotelsDesComponent,
    AllBlogsComponent,
    TourPackageComponent,
    PackageDetailsComponent,
    SafePipe,
    FilterByComponent,
  ],
  imports: [
    CommonModule,
    NgxSliderModule,
    DestinationContentRoutingModule,
    CollapseModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),

    RatingModule.forRoot(),
    ShareModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DestinationContentModule {}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}