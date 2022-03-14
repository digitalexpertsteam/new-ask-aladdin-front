import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPagesComponent } from './all-pages/all-pages.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path:'',component:AllPagesComponent},
  { path: ':slug/page/:category/:page',component:PageComponent},
  { path: ':slug/page/:page',component:PageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
