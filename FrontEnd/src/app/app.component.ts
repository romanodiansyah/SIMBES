import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  myForm : FormGroup;
  email: FormControl;
  password: FormControl;
  constructor(private router: Router) {}


  title = 'mppl';

  loginPage = LoginPageComponent;

  ngOnInit() {
    this.email = new FormControl
  }

  openLogin(): void {
    this.router.navigate(['app/login-Page'])
  }

}
