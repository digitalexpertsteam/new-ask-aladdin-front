import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLinksComponent } from '../../pages/page-links/page-links.component';



@NgModule({
  declarations: [
    PageLinksComponent,
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[PageLinksComponent]
})
export class ShareModule {}
