import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { P400Component } from './p400/p400.component';
import { LayoutModule } from './modules/layout/layout.module';
import { AngularMaterialModule } from './angularMaterialComponents/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { TestComponent } from './test/test.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Test2Component } from './test2/test2.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    P400Component,
    TestComponent,
    ForgotPasswordComponent,
    Test2Component,
    
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,

    
    
  ],

  exports: [
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
