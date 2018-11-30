import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  title = 'mppl';

  loginPage = LoginPageComponent;


  openLogin(): void {
    this.router.navigate(['app/login-Page'])
  }

}
