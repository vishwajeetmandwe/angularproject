import { HomePageComponent } from './login/home/home-page/home-page.component';
import { HomeModule } from './login/home/home.module';
import { SignupPageComponent } from './signup/signup-page/signup-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent},
    { path: 'home', component: HomePageComponent}
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
