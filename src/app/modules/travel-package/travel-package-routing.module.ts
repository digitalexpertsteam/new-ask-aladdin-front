import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPackagesComponent } from './all-packages/all-packages.component';
import { CategoryPackagesComponent } from './category-packages/category-packages.component';
import { CatergoryComponent } from './catergory/catergory.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { SinglePackageComponent } from './single-package/single-package.component';
import { TourPackageComponent } from './tour-package/tour-package.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'',component:AllPackagesComponent},
      {path:':id/travel-packages', component:TourPackageComponent},
      {path:':id/travel-package/:slug', component:SinglePackageComponent},
      {path:':categoreyId/travel-package/:categorySlug/category', component:CatergoryComponent , outlet: "cate"},
      {path:':ide/travel-package/:cat/category', component:CategoryPackagesComponent},
      {path: ":slug/hotel/:hotel",loadChildren: () => import('../hotels/hotels.module').then(m => m.HotelsModule)},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelPackageRoutingModule { }
