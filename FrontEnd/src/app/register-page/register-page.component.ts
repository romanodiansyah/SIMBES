import { Component, OnInit } from '@angular/core';
import { AuthService } from "../Services/auth.service";

import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  nama: string;
  email: string;
  no_pegawai: number;
  password: string;
  jenis_kelamin: number;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register(form: NgForm) 
  {
    if(form.valid) 
    {
      let registerData = 
      {
        no_pegawai : 1,
        nama : this.nama,
        email : this.email,
        jenis_kelamin: 1,
        password: this.password
      };
      console.log(registerData);
      this.auth.register(registerData).then((result) => {
        console.log("Yeah");
      }, (err) => {
        console.log(err, "Yahh");
      });
    }
    else
    {
      console.log('form ga valid');
    }
  }
}
