import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeyToSuccessRoutingModule } from './key-to-success-routing.module';
import { AssessmentComponent } from './assessment/assessment.component';
import { GoalComponent } from './goal/goal.component';
import { KeyToSuccessCComponent } from './key-to-success-c/key-to-success-c.component';


@NgModule({
  declarations: [
    AssessmentComponent,
    GoalComponent,
    KeyToSuccessCComponent
  ],
  imports: [
    CommonModule,
    KeyToSuccessRoutingModule
  ]
})
export class KeyToSuccessModule { }
