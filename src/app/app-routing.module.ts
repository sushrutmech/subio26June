import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { P400Component } from './p400/p400.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  { path: "", redirectTo: '/layout/home', pathMatch: "full" },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'Forgot Password Page'
    }
  },

  { path: "test", component: TestComponent },
  { path: "test2", component: Test2Component },

  {
    path: "layout",
    canActivate: [AuthGuard],
    loadChildren: () => import("./modules/layout/layout.module")
      .then(mod => mod.LayoutModule)
  },


  {
    path: "key-to-success",
    canActivate: [AuthGuard],
    loadChildren: () => import("./modules/key-to-success/key-to-success.module")
      .then(mod => mod.KeyToSuccessModule)
  },


  {
    path: 'my-library',
    canActivate: [AuthGuard],
    loadChildren: () => import("./modules/my-library/my-library.module")
      .then(mod => mod.MyLibraryModule)
  },


  {
    path:'profile',
    canActivate: [AuthGuard],
    loadChildren:()=>import('./modules/profile/profile.module')
    .then(mod=>mod.ProfileModule)
  },

  {
    path:'change-passwoord',
    canActivate: [AuthGuard],
    loadChildren:()=>import('./modules/change-password/change-password.module')
    .then(mod=>mod.ChangePasswordModule)
  },

  { path: "**", component: P400Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
