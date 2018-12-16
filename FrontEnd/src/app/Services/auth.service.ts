import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'; 



const url = "http://127.0.0.1:8000/api/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public data: any;
  public token: any;

  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(private http: HttpClient, private storage: Storage) { }

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => { 
      return value === true;
    });
  };

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        this.http.post(url+'/login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
              // localStorage.setItem('token', res.data.meta.token);
              this.storage.set(this.HAS_LOGGED_IN, true);
              resolve(res);
            

           }, (err) => {
            reject(err);
          });
    });
  }


  register(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      console.log(credentials);


      this.http.post(url+'/admin/register', credentials, {headers: headers})
        .subscribe(res => {
          console.log("Masuk");
          resolve(res);
          
        }, (err) => {
          reject(err);
        });
    });
  }
}
