import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const url = "http://localhost:8000/api/";

@Component({
  selector: 'app-list-beasiswa',
  templateUrl: './list-beasiswa.component.html',
  styleUrls: ['./list-beasiswa.component.css']
})
export class ListBeasiswaComponent implements OnInit {

  listBeasiswa: any[];
  constructor(private router: Router, public http: HttpClient) { 
    this.http.get(url+'beasiswa').subscribe((res:any)=>{
      this.listBeasiswa = res.data;
    })

  }

  ngOnInit() {
  }

}
