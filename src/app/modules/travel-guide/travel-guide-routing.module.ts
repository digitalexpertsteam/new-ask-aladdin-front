import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTravelguideComponent } from './all-travelguide/all-travelguide.component';
import { SingleGuideComponent } from './single-guide/single-guide.component';
import { TravelGuideComponent } from './travel-guide/travel-guide.component';

const routes: Routes = [

    {path:'',children:[
    {path:'',component:AllTravelguideComponent},
    {path:':slug/travel-guides',component:TravelGuideComponent},
    {path:':id/travel-guide/:guide',component:SingleGuideComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelGuideRoutingModule { }
