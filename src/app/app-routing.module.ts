import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { transform } from 'typescript';
import { AllPackagesDestinationComponent } from './components/all-packages-destination/all-packages-destination.component';
import { HomeComponent } from './components/home/home.component';
import { TourDetailsComponent } from './modules/destination-single-content/singleComponents/tour-details/tour-details.component';
import { TravelGuideComponent } from './components/travel-guide/travel-guide.component';
import { AllDestinationsComponent } from './pages/all-destinations/all-destinations.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { OneDestinationComponent } from './pages/one-destination/one-destination.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SingleBlogComponent } from './modules/destination-single-content/singleComponents/single-blog/single-blog.component';
import { AllFaqDestinationComponent } from './components/all-faq-destination/all-faq-destination.component';
import { DataSource } from '@angular/cdk/collections';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { TourPackageComponent } from './modules/destination-content/mainComponents/tour-package/tour-package.component';
import { AllBlogsComponent } from './modules/destination-content/mainComponents/all-blogs/all-blogs.component';
import { SingleExcursionsComponent } from './modules/destination-single-content/singleComponents/single-excursions/single-excursions.component';




const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  {path: "all-destinations",component: AllDestinationsComponent
  },
  { path: "facts", component: AllFaqDestinationComponent },
  // Packages Group 
  { path: ":slug/travel-package", pathMatch: 'full', component: TourPackageComponent },
  { path: ":slug/travel-package/:slug", pathMatch: 'full', component: TourDetailsComponent },
  { path: "travel-package/:slug", pathMatch: 'full', component: TourDetailsComponent },

  // Blogs Group
  { path: ":slug/blogs", pathMatch: 'full', component: AllBlogsComponent },
  { path: ":slug/blogs/:slug", component: SingleBlogComponent },
  // excursion 
  { path: ":slug/travel-excursions", component: SingleExcursionsComponent },
  { path: ":slug/travel-excursions/:slug", component: SingleExcursionsComponent },


  // {path:":slug/:slug/:slug" , pathMatch: 'full', loadChildren:()=>import('./modules/destination-single-content/destination-single-content.module').then(m=> m.DestinationSingleContentModule)},
  { path: "travelguide", component: TravelGuideComponent },
  { path: "privacypolicy", component: PrivacyPolicyComponent },
  { path: "all-Packages", component: AllPackagesDestinationComponent },
  { path: "single-package", component: TourDetailsComponent },
  { path: "our-story", component: OurStoryComponent },
  { path: "contactUs", component: ContactUsComponent },

  { path: ':slug', pathMatch: 'full', component: OneDestinationComponent },
  { path: '**', component: DashboardComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
