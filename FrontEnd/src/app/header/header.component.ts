import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../beranda-mahasiswa/beranda-mahasiswa.component.css']
})
export class HeaderComponent implements OnInit {
  udahLogin = false;
  nama: string;

  constructor() { 
    if(localStorage.getItem['token']){
        this.udahLogin=true;
        this.nama=localStorage.getItem['nama'];        
    }
  }

  ngOnInit() {
  }

}
