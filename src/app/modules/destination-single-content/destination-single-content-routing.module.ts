import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponentsComponent } from './single-components/single-components.component';

const routes: Routes = [
  {path:'' , component: SingleComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationSingleContentRoutingModule { }
