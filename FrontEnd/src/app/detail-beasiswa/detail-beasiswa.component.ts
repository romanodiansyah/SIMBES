import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-beasiswa',
  templateUrl: './detail-beasiswa.component.html',
  styleUrls: ['./detail-beasiswa.component.css']
})
export class DetailBeasiswaComponent implements OnInit {
  beasiswa: any;

  constructor() { 
    this.beasiswa = localStorage.getItem('beasiswa');
    console.log(this.beasiswa)
  }

  ngOnInit() {
  }

}
