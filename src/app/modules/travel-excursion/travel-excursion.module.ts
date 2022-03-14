import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelExcursionRoutingModule } from './travel-excursion-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AllExcursionComponent } from './all-excursion/all-excursion.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SingleExcursionComponent } from './single-excursion/single-excursion.component';
import { CityExcursionComponent } from './city-excursion/city-excursion.component';


@NgModule({
  declarations: [
    AllExcursionComponent,
    SingleExcursionComponent,
    CityExcursionComponent
  ],
  imports: [
    CommonModule,
    TravelExcursionRoutingModule,
    SharedModule,
    RatingModule
  ]
})
export class TravelExcursionModule { }
