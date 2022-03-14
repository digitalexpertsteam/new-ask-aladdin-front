import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs/faqs.component';
import { AllFaqsComponent } from './all-faqs/all-faqs.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FaqsComponent,
    AllFaqsComponent
  ],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    SharedModule,
  ]
})
export class FaqsModule { }
