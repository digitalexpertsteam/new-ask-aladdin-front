import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelPackageRoutingModule } from './travel-package-routing.module';
import { AllPackagesComponent } from './all-packages/all-packages.component';
import { SharedModule } from '../shared/shared.module';
import { TourPackageComponent } from './tour-package/tour-package.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SinglePackageComponent } from './single-package/single-package.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HightlightesComponent } from './single-package/hightlightes/hightlightes.component';
import { HotelsRoutingModule } from '../hotels/hotels-routing.module';
import { CatergoryComponent } from './catergory/catergory.component';
import { CategoryPackagesComponent } from './category-packages/category-packages.component';
import { WeAreComponent } from './we-are/we-are.component';


@NgModule({
  declarations: [
    AllPackagesComponent,
    TourPackageComponent,
    PackageDetailsComponent,
    SinglePackageComponent,
    HightlightesComponent,
    CatergoryComponent,
    CategoryPackagesComponent,
    WeAreComponent,

  ],
  imports: [
    CommonModule,
    TravelPackageRoutingModule,
    SharedModule,
    RatingModule.forRoot(),
    ReactiveFormsModule,
    HotelsRoutingModule



  ]
})
export class TravelPackageModule { }
