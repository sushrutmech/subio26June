import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SuccessKeyChartComponent } from './success-key-chart/success-key-chart.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgStreamingModule } from '@videogular/ngx-videogular/streaming';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ViewContentComponent } from './view-content/view-content.component';


@NgModule({
  declarations: [
    AssessmentFormComponent,
    SuccessKeyChartComponent,
    VideoPlayerComponent,
    PdfViewerComponent,
    ViewContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule.forRoot(),
    NgxPaginationModule,
    NgxSpinnerModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    NgxExtendedPdfViewerModule
  ],
  exports: [
    AssessmentFormComponent,
    SuccessKeyChartComponent,
    VideoPlayerComponent,
    PdfViewerComponent,
    ViewContentComponent
  ]
})
export class ComponentsModule { }
