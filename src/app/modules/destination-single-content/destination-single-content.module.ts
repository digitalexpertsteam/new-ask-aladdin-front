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
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { SingleFaqComponent } from './singleComponents/single-faq/single-faq.component';
import { SingleGuideComponent } from './singleComponents/single-guide/single-guide.component';
import { SingleHotelComponent } from './singleComponents/single-hotel/single-hotel.component';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";

import { NgxYoutubePlayerModule  } from "ngx-youtube-player";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";


import { DestinationSingleContentRoutingModule } from "./destination-single-content-routing.module";
import { SafePipe } from "../../pipes/InnerHtml.pipe";

@NgModule({
  declarations: [
    SingleComponentsComponent,
    SingleBlogComponent,
    TourDetailsComponent,
    SingleExcursionsComponent,
    TagsExcursionsComponent,
    ExcursionsSplendorComponent,
    MapPipe,
    SafePipe,
    SingleFaqComponent,
    SingleGuideComponent,
    SingleHotelComponent,
   

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule,
     ShareModule,
     DestinationSingleContentRoutingModule,
     TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),

     BrowserModule,
     NgxYoutubePlayerModule.forRoot(),

    ],

})
export class DestinationSingleContentModule {}
platformBrowserDynamic().bootstrapModule(DestinationSingleContentModule);
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
