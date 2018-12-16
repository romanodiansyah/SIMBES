import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';

const url = "http://127.0.0.1:8000/api/beasiswa";

@Injectable({
  providedIn: 'root'
})
export class BeasiswaService {

  public data: any;

  constructor(private http: HttpClient) { }
  readBeasiswa(credentials){
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      // headers.append()
    })
  }
}
