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

import { RatingModule } from "ngx-bootstrap/rating";

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
    DestinationContentRoutingModule,
    CollapseModule.forRoot(),

    RatingModule.forRoot(),
    ShareModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DestinationContentModule {}
