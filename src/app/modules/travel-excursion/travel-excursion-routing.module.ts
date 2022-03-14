import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllExcursionComponent } from './all-excursion/all-excursion.component';
import { CityExcursionComponent } from './city-excursion/city-excursion.component';
import { SingleExcursionComponent } from './single-excursion/single-excursion.component';

const routes: Routes = [{path:'',children:[
  {path:'',component:CityExcursionComponent},
  {path:':id/travel-excursions/:excursion',component:SingleExcursionComponent},
  {path:':id/:city/travel-excursions',component:AllExcursionComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelExcursionRoutingModule { }
