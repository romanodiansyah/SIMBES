import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const url = "http://localhost:8000/api/";

@Component({
  selector: 'app-detail-beasiswa',
  templateUrl: './detail-beasiswa.component.html',
  styleUrls: ['./detail-beasiswa.component.css']
})
export class DetailBeasiswaComponent implements OnInit {
  beasiswa: any;

  constructor(private route:ActivatedRoute, private http: HttpClient) { 
    // this.beasiswa = localStorage.getItem('beasiswa');
    // console.log(this.beasiswa)
    const id = +this.route.snapshot.params["id"];
    this.http.get(url+"beasiswa/view/"+id).subscribe((res:any)=> {
      this.beasiswa = res.data;
    });

  }

  ngOnInit() {
    
  }

}
