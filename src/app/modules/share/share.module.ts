import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLinksComponent } from '../../pages/page-links/page-links.component';
import { SponsorssComponent } from '../../pages/sponsorss/sponsorss.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AsideComponent } from '../../components/aside/aside.component';



@NgModule({
  declarations: [
    PageLinksComponent,
    SponsorssComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    CarouselModule ,
    IvyCarouselModule,


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[PageLinksComponent , SponsorssComponent , AsideComponent]
})
export class ShareModule {}
