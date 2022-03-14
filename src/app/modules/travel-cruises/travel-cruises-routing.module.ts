import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCruisesComponent } from './all-cruises/all-cruises.component';
import { SingleCruisesComponent } from './single-cruises/single-cruises.component';

const routes: Routes = [

    {
      path:'' , component:AllCruisesComponent
    },
    {
      path:':id/travel-cruises/:cruis' , component:SingleCruisesComponent
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelCruisesRoutingModule { }
