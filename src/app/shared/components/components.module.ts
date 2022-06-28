import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SuccessKeyChartComponent } from './success-key-chart/success-key-chart.component';


@NgModule({
  declarations: [
    AssessmentFormComponent,
    SuccessKeyChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule.forRoot(),
    NgxPaginationModule,
    NgxSpinnerModule,
  ],
  exports: [
    AssessmentFormComponent,
    SuccessKeyChartComponent
  ]
})
export class ComponentsModule { }
