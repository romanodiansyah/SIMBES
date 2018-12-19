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
    listApplicableBeasiswa: any[];
    listClosedBeasiswa: any[];
    listNews: any[];

    beasiswa: any;
 // headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(
    private router: Router,
    public http: HttpClient) { 
      // let headers = new Headers({'Content-Type':'application/json'});
      // let options = new RequestOptions({headers: headers});
      // if (localStorage.getItem("token") != null) {
      this.http.get(url+'beasiswa/applicable').subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('listBeasiswaApplicable', res.data);
        this.listApplicableBeasiswa = res.data;
      },err =>{
        console.log("error get listBeasiswa", err);
      });
      // }

      console.log(this.listApplicableBeasiswa);
      this.http.get(url+'beasiswa/closed').subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('listBeasiswaclosed', res.data);
        this.listClosedBeasiswa = res.data;
      },err =>{
        console.log("error get listBeasiswa", err);
      });
      console.log(this.listClosedBeasiswa);

      this.http.get(url+'list/news').subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('listNews', res.data);
        this.listNews = res.data;
      },err =>{
        console.log("error get listNews", err);
      });
      console.log(this.listNews);
    }

    gotoBeasiswaDetail(id){
      this.http.get(url+'beasiswa/view/'+id).subscribe((res:any) => {
        console.log("1",res);
        console.log("2", res.data);
        console.log("3", res.data.data);
        localStorage.setItem('beasiswa', res.data);
        this.beasiswa = res.data;
        this.router.navigate(['/detail']);
      },err =>{
        console.log("error get beasiswa", err);
      });
    }
  ngOnInit() {
  }

}
