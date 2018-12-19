import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Headers , RequestOptions} from "@angular/http";
import {HttpHeaders, HttpClient} from '@angular/common/http';

const url = "http://localhost:8000/api/";

@Component({
  selector: 'app-beranda-mahasiswa',
  templateUrl: './beranda-mahasiswa.component.html',
  styleUrls: ['./beranda-mahasiswa.component.css']
})
export class BerandaMahasiswaComponent implements OnInit {
   beasiswa: any;
 // headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public http: HttpClient) { 
      let headers = new Headers({'Content-Type':'application/json'});
      // let options = new RequestOptions({headers: headers});
      // if (localStorage.getItem("token") != null) {
        this.http.get(url+'beasiswa')
      .subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('listBeasiswa', res.data);
        this.beasiswa = res.data;
      },err =>{
        console.log("error get listBeasiswa", err);
      });
      // }
      console.log(this.beasiswa);
    }

  ngOnInit() {
  }

}
