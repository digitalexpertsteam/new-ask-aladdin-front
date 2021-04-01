import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainContentsComponent} from './main-contents/main-contents.component';
import {TravelCruisesDesComponent} from '../mainComponents/travel-cruises-des/travel-cruises-des.component';
import {TravelExcursionsDesComponent} from '../mainComponents/travel-excursions-des/travel-excursions-des.component';
import {TravelFactsDesComponent} from '../mainComponents/travel-facts-des/travel-facts-des.component';
import {TravelGuideDesComponent} from '../mainComponents/travel-guide-des/travel-guide-des.component';
import {TravelHotelsDesComponent} from '../mainComponents/travel-hotels-des/travel-hotels-des.component';
import {TourPackageComponent} from '../mainComponents/tour-package/tour-package.component';
import {AllBlogsComponent} from '../mainComponents/all-blogs/all-blogs.component';
import { PackageDetailsComponent } from '../mainComponents/package-details/package-details.component';
import { FilterByComponent } from '../../pages/filter-by/filter-by.component';
import { DestinationContentRoutingModule } from './destination-content-routing.module';
import { SafePipe } from '../../pipes/safe-url.pipe';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    MainContentsComponent,
    TravelCruisesDesComponent,
    TravelExcursionsDesComponent,
    TravelFactsDesComponent,
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
    ShareModule
    
   
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DestinationContentModule { }
