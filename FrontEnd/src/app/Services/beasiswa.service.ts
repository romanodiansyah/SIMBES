import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

const url = "http://127.0.0.1:8000/api/beasiswa";

@Injectable({
  providedIn: 'root'
})
export class BeasiswaService {

  public data: any;

  constructor(private http: HttpClient) { }
  readBeasiswa(credentials){
    
  }
}
