import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelComponent } from './hotel/hotel.component';
import { SharedModule } from '../shared/shared.module';
import { RatingModule } from 'ngx-bootstrap/rating';


@NgModule({
  declarations: [
    HotelComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    SharedModule,
    RatingModule

  ]
})
export class HotelsModule { }
