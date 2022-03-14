import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AllBlogComponent } from './all-blog/all-blog.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AllBlogComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule
  ]
})
export class BlogsModule { }
