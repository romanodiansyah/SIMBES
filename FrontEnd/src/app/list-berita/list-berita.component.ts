import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const url = "http://localhost:8000/api/";

@Component({
  selector: 'app-list-berita',
  templateUrl: './list-berita.component.html',
  styleUrls: ['../beranda-mahasiswa/beranda-mahasiswa.component.css']
})
export class ListBeritaComponent implements OnInit {

  listBerita: any[];
  constructor(private router: Router, public http: HttpClient) { 
    this.http.get(url+'list/news').subscribe((res:any)=>{
      this.listBerita = res.data;
    })

  }
  ngOnInit() {
  }

}
