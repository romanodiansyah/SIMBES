import { Component, OnInit } from '@angular/core';
import { AuthService } from "../Services/auth.service";
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const url = "http://localhost:8000/api/";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  
  constructor(private http: HttpClient, private router: Router) { }
  beasiswa: any[];
  myform : FormGroup;

  formLogin : {email?: any; password?:any;}={};

  token:any;

  ngOnInit() {
    
  }

  loginuser(event) {
    event.preventDefault()
    console.log(event)
  }

  login(){
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    console.log(this.formLogin);
    // console.log(headers);

    this.http.post(url+'auth/login', JSON.stringify(this.formLogin), {headers: headers})
      .subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('user', res.data);
        localStorage.setItem('token', res.meta.token);
        localStorage.setItem('id_user', res.data.id_user);
        localStorage.setItem('nama', res.data.nama);
        
        //   this.http.get(url+'beasiswa', {headers: headers})
        // .subscribe((res:any) => {
        //   console.log(res);
        //   localStorage.setItem('listBeasiswa', res.data);
        //   this.beasiswa = res.data;
        // },err =>{
        //   console.log("error get listBeasiswa", err);
        // });
        // // this.storage.set('token', )
        this.router.navigate(['']);
      },err =>{
        console.log("error", err);
      });

  }


  // login(form: NgForm) 
  // {
  //   if(form.valid) 
  //   {
  //     let registerData = 
  //     {
  //       no_pegawai : 1,
  //       nama : this.nama,
  //       email : this.email,
  //       jenis_kelamin: 1,
  //       password: this.password
  //     };
  //     console.log(registerData);
  //     this.auth.register(registerData).then((result) => {
  //       console.log("Yeah");
  //     }, (err) => {
  //       console.log(err, "Yahh");
  //     });
  //   }
  //   else
  //   {
  //     console.log('form ga valid');
  //   }
  // }

}
