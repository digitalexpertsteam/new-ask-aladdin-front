import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelCruisesRoutingModule } from './travel-cruises-routing.module';
import { AllCruisesComponent } from './all-cruises/all-cruises.component';
import {  crateTranslateLoader, SharedModule } from '../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SingleCruisesComponent } from './single-cruises/single-cruises.component';
import { HotelsRoutingModule } from '../hotels/hotels-routing.module';


@NgModule({
  declarations: [
    AllCruisesComponent,
    SingleCruisesComponent
  ],
  imports: [
    CommonModule,
    TravelCruisesRoutingModule,
    SharedModule,
    RatingModule,
    HotelsRoutingModule

  ],
})
export class TravelCruisesModule { }
