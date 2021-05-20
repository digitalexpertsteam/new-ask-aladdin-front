import { RouterModule, Routes } from "@angular/router";



import { SingleFaqComponent } from "./modules/destination-single-content/singleComponents/single-faq/single-faq.component";
import { TravelFactsDesComponent } from "./modules/destination-content/mainComponents/travel-facts-des/travel-facts-des.component";
import { TravelGuideDesComponent } from "./modules/destination-content/mainComponents/travel-guide-des/travel-guide-des.component";
import { SingleGuideComponent } from "./modules/destination-single-content/singleComponents/single-guide/single-guide.component";

import { AllBlogsComponent } from "./modules/destination-content/mainComponents/all-blogs/all-blogs.component";
import { AllDestinationsComponent } from "./pages/all-destinations/all-destinations.component";
import { AllFaqDestinationComponent } from "./components/all-faq-destination/all-faq-destination.component";
import { AllPackagesDestinationComponent } from "./components/all-packages-destination/all-packages-destination.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { DashboardComponent } from "./shared/dashboard/dashboard.component";
import { DataSource } from "@angular/cdk/collections";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { OneDestinationComponent } from "./pages/one-destination/one-destination.component";
import { OurStoryComponent } from "./pages/our-story/our-story.component";
import { PrivacyPolicyComponent } from "./pages/privacy-policy/privacy-policy.component";
import { SingleBlogComponent } from "./modules/destination-single-content/singleComponents/single-blog/single-blog.component";
import { SingleExcursionsComponent } from "./modules/destination-single-content/singleComponents/single-excursions/single-excursions.component";
import { TourDetailsComponent } from "./modules/destination-single-content/singleComponents/tour-details/tour-details.component";
import { TourPackageComponent } from "./modules/destination-content/mainComponents/tour-package/tour-package.component";
import { TravelExcursionsDesComponent } from "./modules/destination-content/mainComponents/travel-excursions-des/travel-excursions-des.component";
import { TravelGuideComponent } from "./components/travel-guide/travel-guide.component";
import { transform } from "typescript";
import { TravelCruisesDesComponent } from "./modules/destination-content/mainComponents/travel-cruises-des/travel-cruises-des.component";
import { SingleCruisesComponent } from "./pages/single-cruises/single-cruises.component";
import { PageComponent } from "./pages/page/page.component";
import { SingleHotelComponent } from "./modules/destination-single-content/singleComponents/single-hotel/single-hotel.component";
import { SinglePageComponent } from "./pages/single-page/single-page.component";
import { CategoreyFooterComponent } from "./shared/categorey-footer/categorey-footer.component";
import { ReviewsComponent } from "./pages/reviews/reviews.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { MeetOurTeamComponent } from "./pages/meet-our-team/meet-our-team.component";


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "all-destinations", component: AllDestinationsComponent },
  { path: "facts", component: AllFaqDestinationComponent },
  // Packages Group
  {
    path: ":slug/travel-package",
    pathMatch: "full",
    component: TourPackageComponent,
  },
  {
    path: ":id/travel-package/:slug",
    pathMatch: "full",
    component: TourDetailsComponent,
  },
  {
    path: "travel-package/:slug",
    pathMatch: "full",
    component: TourDetailsComponent,
  },

  // Blogs Group
  { path: ":slug/blogs", pathMatch: "full", component: AllBlogsComponent },
  { path: ":slug/blogs/:id", component: SingleBlogComponent },
  // excursion
  { path: ":slug/travel-excursions", component: TravelExcursionsDesComponent },
  {
    path: ":id/travel-excursions/:slug",
    component: SingleExcursionsComponent,
  },

  // facts
  { path: ":slug/facts-myths", component: TravelFactsDesComponent },
  {
    path: ":id/facts-myths/:slug",
    component: SingleFaqComponent,
  },
  // travel-guide 
  { path: ":id/travel-guides", component: TravelGuideDesComponent },
  {
    path: ":id/travel-guides/:slug", component: SingleGuideComponent,
  },

  // cruises
  { path: ":slug/travel-cruises", component: TravelCruisesDesComponent },
  { path: ":id/travel-cruises/:slug", component:SingleCruisesComponent},
  
  // {path:":slug/:slug/:slug" , pathMatch: 'full', loadChildren:()=>import('./modules/destination-single-content/destination-single-content.module').then(m=> m.DestinationSingleContentModule)},
  { path: "travelguide", component: TravelGuideComponent },
  { path: ":id/reviews",  component: ReviewsComponent },

  { path: "privacypolicy", component: PrivacyPolicyComponent },
  { path: "all-Packages", component: AllPackagesDestinationComponent },
  { path: "single-package", component: TourDetailsComponent },
  { path: "our-story", component: OurStoryComponent },
  { path: "contactUs", component: ContactUsComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "meet-the-team", component: MeetOurTeamComponent },


  { path: ":id/category/:slug", pathMatch: "full", component: PageComponent },
  { path: ":id/page/:cate/:slug", pathMatch: "full", component: SinglePageComponent },
  { path: ":id/hotel/:slug",  component: SingleHotelComponent },

  { path: ":slug/destination", component: OneDestinationComponent },
  { path: "**", component: DashboardComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
