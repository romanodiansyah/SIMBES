import { Component, OnInit } from '@angular/core';
import { AuthService } from "../Services/auth.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  
  constructor() { }

  myform : FormGroup;

  ngOnInit() {
    
  }

  loginuser(event) {
    event.preventDefault()
    console.log(event)
  }

  register() {

  }

}
