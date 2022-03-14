import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './core/components/about-us/about-us.component';
import { ContactUsComponent } from './core/components/contact-us/contact-us.component';
import { MeetTheTeamComponent } from './core/components/meet-the-team/meet-the-team.component';
import { OurStoryComponent } from './core/components/our-story/our-story.component';
import { PrivacyPolicyComponent } from './core/components/privacy-policy/privacy-policy.component';
import { RedirectUrlComponent } from './core/components/redirect-url/redirect-url.component';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'all-destinations',
    loadChildren: () => import('./modules/destination/destination.module').then(m => m.DestinationModule),
  },
  {
    path: 'all-packages',
    loadChildren: () => import('./modules/travel-package/travel-package.module').then(m => m.TravelPackageModule),
  },
  {
    path: 'travel-guides',
    loadChildren: () => import('./modules/travel-guide/travel-guide.module').then(m => m.TravelGuideModule),
  },
  {
    path: 'facts-myths',
    loadChildren: () => import('./modules/faqs/faqs.module').then(m => m.FaqsModule),
  },
  {
    path: 'about-us', component:AboutUsComponent
  },
  {
    path: 'contact-us', component:ContactUsComponent
  },
  {
    path: 'meet-the-team', component:MeetTheTeamComponent
  },
  {
    path: 'our-story', component:OurStoryComponent
  },
  {
    path: 'privacy-policy', component:PrivacyPolicyComponent
  },
  {
    path: 'sitebackend',
    component:RedirectUrlComponent,
  },






  // { path: ':slug/travel-guides',loadChildren: () => import('./modules/travel-guide/travel-guide.module').then(m => m.TravelGuideModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
