import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { BerandaMahasiswaComponent } from './beranda-mahasiswa/beranda-mahasiswa.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { ListBeasiswaComponent } from './list-beasiswa/list-beasiswa.component';
import { ListBeritaComponent } from './list-berita/list-berita.component';
import { DetailBeasiswaComponent } from './detail-beasiswa/detail-beasiswa.component';
import { DaftarBeasiswaComponent } from './daftar-beasiswa/daftar-beasiswa.component'; 
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    BerandaMahasiswaComponent,
    HeaderComponent,
    FooterComponent,
    DetailComponent,
    ListBeasiswaComponent,
    ListBeritaComponent,
    DetailBeasiswaComponent,
    DaftarBeasiswaComponent
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
        path: 'listbeasiswa',
        component: ListBeasiswaComponent
      },
      {
        path: 'listberita',
        component: ListBeritaComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      }
    ]),
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }