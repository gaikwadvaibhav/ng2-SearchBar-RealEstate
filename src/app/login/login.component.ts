import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(
    private loginservice: LoginServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onLogin(email,password){
    // console.log(email,password);
    this.loginservice.login(email,password).subscribe(res => console.log(res));
  }
}
