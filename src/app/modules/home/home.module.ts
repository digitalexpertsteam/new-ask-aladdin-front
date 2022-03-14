import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeComponent } from './home/home.component';
import { TopDestinationComponent } from './top-destination/top-destination.component';
import { BookHomeComponent } from './book-home/book-home.component';
import { SafetyHomeComponent } from './safety-home/safety-home.component';
import { WhyAskComponent } from './why-ask/why-ask.component';
import { VerfiedAgentComponent } from './verfied-agent/verfied-agent.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { CarouselModule } from "ngx-owl-carousel-o";
import { HomeToursComponent } from './home-tours/home-tours.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeSliderComponent,
    TopDestinationComponent,
    BookHomeComponent,
    SafetyHomeComponent,
    WhyAskComponent,
    VerfiedAgentComponent,
    HomeBlogComponent,
    HomeToursComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule
  ],
})
export class HomeModule { }
