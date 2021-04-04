import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleComponentsComponent } from '../destination-single-content/single-components/single-components.component';
import { SingleBlogComponent } from '../destination-single-content/singleComponents/single-blog/single-blog.component';
import { TourDetailsComponent } from '../destination-single-content/singleComponents/tour-details/tour-details.component';
import { SingleExcursionsComponent } from '../destination-single-content/singleComponents/single-excursions/single-excursions.component';



import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { DestinationContentModule } from '../destination-content/destination-content.module';
import { MapPipe } from '../../pipes/map.pipe';


@NgModule({
  declarations: [
    SingleComponentsComponent,
    SingleBlogComponent,
    TourDetailsComponent,
    SingleExcursionsComponent,
    MapPipe
    
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    DestinationContentModule,
    ShareModule,
    
    

  ],
  
})
export class DestinationSingleContentModule { }
