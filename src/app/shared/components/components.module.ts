import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';



@NgModule({
  declarations: [
    AssessmentFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AssessmentFormComponent
  ]
})
export class ComponentsModule { }
