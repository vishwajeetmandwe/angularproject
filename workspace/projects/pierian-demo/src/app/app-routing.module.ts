import { LoginPageComponent } from './login/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingupPageComponent } from './login/singup-page/singup-page.component';



const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'signup', component: SingupPageComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
