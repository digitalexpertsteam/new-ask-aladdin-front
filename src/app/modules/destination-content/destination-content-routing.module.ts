import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentsComponent } from '../components/main-contents/main-contents.component';

const routes: Routes = [
  {path:'' , component: MainContentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationContentRoutingModule { }
