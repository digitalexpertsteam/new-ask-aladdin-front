import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlogComponent } from './all-blog/all-blog.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path:'',

  children: [
    { path: '', component: AllBlogComponent},
    { path: ':id/blog/:blog', component: BlogComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
