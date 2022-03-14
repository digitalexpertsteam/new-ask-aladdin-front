import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelGuideRoutingModule } from './travel-guide-routing.module';
import { TravelGuideComponent } from './travel-guide/travel-guide.component';
import { SingleGuideComponent } from './single-guide/single-guide.component';
import { SharedModule } from '../shared/shared.module';
import { AllTravelguideComponent } from './all-travelguide/all-travelguide.component';


@NgModule({
  declarations: [
    TravelGuideComponent,
    SingleGuideComponent,
    AllTravelguideComponent
  ],
  imports: [
    CommonModule,
    TravelGuideRoutingModule,
    SharedModule
  ]
})
export class TravelGuideModule { }
