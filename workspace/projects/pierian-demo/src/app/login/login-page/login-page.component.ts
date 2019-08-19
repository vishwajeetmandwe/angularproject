import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  onLogin(userName: string, password: string){ 
    console.log( `userName ${userName}, password ${password}`);
    
    if(userName == 'vish' && password == '123456'){
      this.router.navigate(['home'])
    }
    else{
      console.log('insert id nd password');
    }
  }

  ngOnInit() {
  }

}
