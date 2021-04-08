import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourDetailsComponent } from '../destination-single-content/singleComponents/tour-details/tour-details.component';
import { TourPackageComponent } from './mainComponents/tour-package/tour-package.component';

const routes: Routes = [
  {path:":slug/travel-package/:slug" , component: TourDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationContentRoutingModule { }
