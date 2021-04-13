import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DestinationContentModule } from "../destination-content/destination-content.module";
import { MapPipe } from "../../pipes/map.pipe";
import { NgModule } from "@angular/core";
import { ShareModule } from "../share/share.module";
import { SingleBlogComponent } from "../destination-single-content/singleComponents/single-blog/single-blog.component";
import { SingleComponentsComponent } from "../destination-single-content/single-components/single-components.component";
import { SingleExcursionsComponent } from "../destination-single-content/singleComponents/single-excursions/single-excursions.component";
import { TourDetailsComponent } from "../destination-single-content/singleComponents/tour-details/tour-details.component";
import { TagsExcursionsComponent } from "./singleComponents/tags-excursions/tags-excursions.component";
import { ExcursionsSplendorComponent } from "./singleComponents/excursions-splendor/excursions-splendor.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { SingleFaqComponent } from './singleComponents/single-faq/single-faq.component';
import { SingleGuideComponent } from './singleComponents/single-guide/single-guide.component';
import { SingleHotelComponent } from './singleComponents/single-hotel/single-hotel.component';




import { IvyGalleryModule } from "angular-gallery";
import { DestinationSingleContentRoutingModule } from "./destination-single-content-routing.module";

@NgModule({
  declarations: [
    SingleComponentsComponent,
    SingleBlogComponent,
    TourDetailsComponent,
    SingleExcursionsComponent,
    TagsExcursionsComponent,
    ExcursionsSplendorComponent,
    MapPipe,
    SingleFaqComponent,
    SingleGuideComponent,
    SingleHotelComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule,
     ShareModule,
     DestinationSingleContentRoutingModule,
    ],

})
export class DestinationSingleContentModule {}
