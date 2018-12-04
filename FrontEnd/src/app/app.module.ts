import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { BerandaMahasiswaComponent } from './beranda-mahasiswa/beranda-mahasiswa.component';
import { HeaderComponent } from './header/header.component';
import { BerandaAdminPageComponent } from './beranda-admin-page/beranda-admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    BerandaMahasiswaComponent,
    HeaderComponent,
    BerandaAdminPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BerandaMahasiswaComponent
      },
      {
        path: 'register',
        component: RegisterPageComponent
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'berandaadmin',
        component: BerandaAdminPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
