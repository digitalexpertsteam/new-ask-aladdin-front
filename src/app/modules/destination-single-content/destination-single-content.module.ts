import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationSingleContentRoutingModule } from './destination-single-content-routing.module';
import { SingleComponentsComponent } from '../destination-single-content/single-components/single-components.component';
import { SingleBlogComponent } from '../destination-single-content/singleComponents/single-blog/single-blog.component';
import { AsideComponent } from '../../components/aside/aside.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    SingleComponentsComponent,
    SingleBlogComponent,
    AsideComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    DestinationSingleContentRoutingModule,
    

  ],
  
})
export class DestinationSingleContentModule { }
