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

  constructor(private http: HttpClient) { }
  register(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      console.log(credentials);


      this.http.post(url+'/admin/register', credentials, {headers: headers})
        .subscribe(res => {
          console.log("Masuk");
          if(res == 201) {
            console.log("Yeah berhasil");
            resolve(res);
          }
          
        }, (err) => {
          reject(err);
        });
    });
  }
}
