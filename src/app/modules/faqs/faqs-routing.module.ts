import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFaqsComponent } from './all-faqs/all-faqs.component';
import { FaqsComponent } from './faqs/faqs.component';

const routes: Routes = [
  {path:'',children:[
    {path:'',component:AllFaqsComponent},
    {path:':slug/facts-myths',component:FaqsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqsRoutingModule { }
