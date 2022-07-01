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
import { ComponentsModule } from 'src/app/shared/components/components.module';

import { KeySuccessContainerComponent } from './key-success-container/key-success-container.component';
import { KeyToSuccessModule } from '../key-to-success/key-to-success.module';







@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    LayoutComponentComponent,
    KeySuccessContainerComponent,
    
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    AngularMaterialModule,
    StarRatingModule.forRoot(),
    LayoutRoutingModule,
    ComponentsModule,
    KeyToSuccessModule
    
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    LayoutComponentComponent,
    
  ]
})
export class LayoutModule { }
