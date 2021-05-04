import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleHotelComponent } from '../destination-single-content/singleComponents/single-hotel/single-hotel.component';
import { TourDetailsComponent } from '../destination-single-content/singleComponents/tour-details/tour-details.component';
import { TourPackageComponent } from './mainComponents/tour-package/tour-package.component';

const routes: Routes = [
  {path:":slug/travel-package/:slug" , component: TourDetailsComponent },
  { path: ":slug/:id", pathMatch: "full", component: SingleHotelComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationContentRoutingModule { }
