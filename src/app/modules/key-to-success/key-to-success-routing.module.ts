import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { GoalComponent } from './goal/goal.component';
import { KeyToSuccessCComponent } from './key-to-success-c/key-to-success-c.component';

const routes: Routes = [
  {
    path: 'goal',
    component: GoalComponent,
    
  },
  {
    path: 'assessment',
    component: AssessmentComponent,
    
  },
  {
    path: 'key',
    component: KeyToSuccessCComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyToSuccessRoutingModule { }
