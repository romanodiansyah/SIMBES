import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestOptions } from '@angular/http';

const url = "http://localhost:8000/api/";

@Component({
  selector: 'app-daftar-beasiswa',
  templateUrl: './daftar-beasiswa.component.html',
  styleUrls: ['../detail-beasiswa/detail-beasiswa.component.css']
})
export class DaftarBeasiswaComponent implements OnInit {

  token: any;
  pendaftarData : {id_beasiswa?:any; id_user?:any; status?:number; status_aktif?:number; alamat_berkas?:any}={};

  constructor(private http: HttpClient, private router:Router, private route:ActivatedRoute) {
    
  }
  
  daftar(){
    console.log("daftar");
    const id_beasiswa = this.route.snapshot.params["id"];
    const id_user = localStorage.getItem('id_user');
    this.pendaftarData.id_beasiswa = id_beasiswa;
    this.pendaftarData.id_user = id_user;
    this.pendaftarData.status = 1;
    this.pendaftarData.status_aktif = 1;
    this.pendaftarData.alamat_berkas = 0; 


    let token = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':'Bearer '+token, 'Content-Type':'application/json'})
    // let options = new RequestOptions({headers: headers});

    this.http.post(url+"pendaftar/create", this.pendaftarData, {headers:headers}).subscribe((res:any) => {
      console.log("sucsess", res)
      this.router.navigate(['']);
    }, err=>{
      console.log('error nih', err)
    });
  }

  ngOnInit() {
  }

}
