import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDestintionsComponent } from './all-destintions/all-destintions.component';
import { OneDestinationComponent } from './one-destination/one-destination.component';

const routes: Routes = [
  {path:'',

  children: [
    { path: '', component: AllDestintionsComponent},
    { path: ':slug/destination', component: OneDestinationComponent },
    { path: ':slug/travel-cruises', loadChildren: () => import('../travel-cruises/travel-cruises.module').then(m => m.TravelCruisesModule) },
    { path: ':slug/travel-excursions',loadChildren: () => import('../travel-excursion/travel-excursion.module').then(m => m.TravelExcursionModule)},
    // { path: ':slug/travel-guides',loadChildren: () => import('../travel-guide/travel-guide.module').then(m => m.TravelGuideModule)},
    { path: ':slug/blogs',loadChildren: () => import('../blogs/blogs.module').then(m => m.BlogsModule)},
    { path: ':slug/category/:page',loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)},
    




]},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }
