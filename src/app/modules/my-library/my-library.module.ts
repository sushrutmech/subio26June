import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLibraryRoutingModule } from './my-library-routing.module';
import { MyLibraryComponent } from './my-library/my-library.component';

import { RatingModule } from 'ng-starrating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule  } from '../../shared/components/components.module'


@NgModule({
  declarations: [
    MyLibraryComponent
  ],
  imports: [
    CommonModule,
    MyLibraryRoutingModule,
    RatingModule,

    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class MyLibraryModule { }
