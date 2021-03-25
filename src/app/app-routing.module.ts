import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { transform } from 'typescript';
import { AllPackagesDestinationComponent } from './components/all-packages-destination/all-packages-destination.component';
import { HomeComponent } from './components/home/home.component';
import { MainContentsComponent } from './modules/destination-content/main-contents/main-contents.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
import { TravelGuideComponent } from './components/travel-guide/travel-guide.component';
import { AllBlogsComponent } from './modules/mainComponents/all-blogs/all-blogs.component';
import { AllDestinationsComponent } from './pages/all-destinations/all-destinations.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { OneDestinationComponent } from './pages/one-destination/one-destination.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';




const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"alldestination",
   component:AllDestinationsComponent},
  {path:":slug/:slug", loadChildren:()=>import('./modules/destination-content/destination-content.module').then(m=> m.DestinationContentModule)},
  {path:"travelguide", component:TravelGuideComponent},
  {path:"privacypolicy",component:PrivacyPolicyComponent},
  {path:"tourdetails",component:AllPackagesDestinationComponent},
  {path:"our-story", component:OurStoryComponent},
  {path:"contactUs", component:ContactUsComponent},
  {path:"singleblog/:id",component:SingleBlogComponent},
  {path:':slug',component: OneDestinationComponent },
  {path:'/admin',component: DashboardComponent }
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
