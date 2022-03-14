import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { AllDestintionsComponent } from './all-destintions/all-destintions.component';
import { OneDestinationComponent } from './one-destination/one-destination.component';
import { SharedModule } from '../shared/shared.module';
import { HotRelatedComponent } from './hot-related/hot-related.component';
import { TravelCruisesRoutingModule } from '../travel-cruises/travel-cruises-routing.module';
import { TravelExcursionRoutingModule } from '../travel-excursion/travel-excursion-routing.module';
import { TravelGuideRoutingModule } from '../travel-guide/travel-guide-routing.module';
import { BlogsRoutingModule } from '../blogs/blogs-routing.module';
import { FaqsRoutingModule } from '../faqs/faqs-routing.module';
import { HotelsRoutingModule } from '../hotels/hotels-routing.module';
import { PagesRoutingModule } from '../pages/pages-routing.module';


@NgModule({
  declarations: [
    AllDestintionsComponent,
    OneDestinationComponent,
    HotRelatedComponent,
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    TravelCruisesRoutingModule,
    TravelExcursionRoutingModule,
    SharedModule,
    TravelGuideRoutingModule,
    BlogsRoutingModule,
    FaqsRoutingModule,
    HotelsRoutingModule,
    PagesRoutingModule,

  ]
})
export class DestinationModule { }
