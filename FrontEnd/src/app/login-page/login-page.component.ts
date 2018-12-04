import { Component, OnInit } from '@angular/core';
import { AuthService } from "../Services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  
  constructor() { }


  ngOnInit() {
  }

  loginuser(event) {
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#pass').value
    console.log(email, password)
  }

  register() {

  }

}
