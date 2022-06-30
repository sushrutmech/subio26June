import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponentComponent } from './layout-component/layout-component.component';

const routes: Routes = [
  {
    path: 'home',
    component:LayoutComponentComponent,
    data: { state: 'home' }
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
