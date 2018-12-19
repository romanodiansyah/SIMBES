import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const url = "http://localhost:8000/api/"
@Component({
  selector: 'app-profil-mahasiswa',
  templateUrl: './profil-mahasiswa.component.html',
  styleUrls: ['../beranda-mahasiswa/beranda-mahasiswa.component.css']
})
export class ProfilMahasiswaComponent implements OnInit {

  user: any;
  nama: any;
  email: any;
  telepon: string;
  alamat: string;
  constructor(private http:HttpClient, private route:ActivatedRoute, private router:Router) {
    if(localStorage.getItem('token')==null){
      this.router.navigate(['/login']);
    }
    else{
      this.user = localStorage.getItem('user');
      this.nama = localStorage.getItem('nama');
      this.email = localStorage.getItem('email');
      this.telepon = localStorage.getItem('telepon');
      this.alamat = localStorage.getItem('alamat');
      console.log(this.user)
      this.email = this.user.email;
    }
   }

  ngOnInit() {
  }

}
