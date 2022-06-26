import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AngularMaterialModule } from 'src/app/angularMaterialComponents/angular-material/angular-material.module';
import { StarRatingModule } from 'angular-star-rating';
import { LayoutRoutingModule } from './layout-routing.module';





@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    LayoutComponentComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    AngularMaterialModule,
    StarRatingModule.forRoot(),
    LayoutRoutingModule
    
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    LayoutComponentComponent
  ]
})
export class LayoutModule { }
