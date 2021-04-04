import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneDestinationComponent } from '../../pages/one-destination/one-destination.component';
import { SingleComponentsComponent } from './single-components/single-components.component';

const routes: Routes = [
  {path:'' , component: OneDestinationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationSingleContentRoutingModule { }
