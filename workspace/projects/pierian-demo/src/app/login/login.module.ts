import { HomeModule } from './home/home.module';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AppRoutingModule } from './../../../../../src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule
  ],
  exports: [LoginPageComponent, HomePageComponent]
})
export class LoginModule { }
