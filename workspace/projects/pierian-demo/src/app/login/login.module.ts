import { AppRoutingModule } from './../../../../../src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SingupPageComponent } from './singup-page/singup-page.component';



@NgModule({
  declarations: [LoginPageComponent, SingupPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [LoginPageComponent, SingupPageComponent]
})
export class LoginModule { }
