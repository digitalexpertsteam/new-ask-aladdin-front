import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
import { TourPackageComponent } from './components/tour-package/tour-package.component';
import { TravelGuideComponent } from './components/travel-guide/travel-guide.component';
import { AllBlogsComponent } from './pages/all-blogs/all-blogs.component';
import { AllDestinationsComponent } from './pages/all-destinations/all-destinations.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { OneDestinationComponent } from './pages/one-destination/one-destination.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"alldestination",component:AllDestinationsComponent},
  {path:"allblogs",component:AllBlogsComponent},
  {path:"travelguide", component:TravelGuideComponent},
  {path:"privacypolicy",component:PrivacyPolicyComponent},
  {path:"tourdetails",component:TourDetailsComponent},
  {path:"our-story", component:OurStoryComponent},
  {path:"contactUs", component:ContactUsComponent},
  {path:"singleblog/:id",component:SingleBlogComponent},
  {path:"", children:[
  {path:':id',component: OneDestinationComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
