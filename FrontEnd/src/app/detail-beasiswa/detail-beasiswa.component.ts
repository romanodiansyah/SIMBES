import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { saveAs } from 'file-saver';
// import { getFileNameFromResponseContentDisposition, saveFile } from 'app/core/helpers/file-download-helper';


const url = "http://localhost:8000/api/";

@Component({
  selector: 'app-detail-beasiswa',
  templateUrl: './detail-beasiswa.component.html',
  styleUrls: ['./detail-beasiswa.component.css']
})
export class DetailBeasiswaComponent implements OnInit {
  beasiswa: any;

  pdf : {id_user?:any;}={};

  constructor(private route:ActivatedRoute, private http: HttpClient, private router:Router) { 
    // this.beasiswa = localStorage.getItem('beasiswa');
    // console.log(this.beasiswa)
    if(localStorage.getItem('token')==null){
      this.router.navigate(['/login']);
    }
    else{
      const id = +this.route.snapshot.params["id"];
    this.http.get(url+"beasiswa/view/"+id).subscribe((res:any)=> {
      console.log(res)
      //  let blob = new Blob([res.data], { type: 'application/pdf' });
      // //  FileSaver
      //  saveAs(blob);
    });
    }
    

  }

  download(){
    this.pdf.id_user = localStorage.getItem('id_user');
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders({'Authorization':'Bearer '+token, 'Content-Type':'application/json'})

    this.http.post(url+"student/pdf", this.pdf, {headers:headers}).subscribe((res:any)=>{
      console.log(res);
      saveAs
    })
  }

  ngOnInit() {
    
  }

}
