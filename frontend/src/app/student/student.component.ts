import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private servis:ServisPrviService) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem("korisnik"));
    this.username = this.user.username;
    this.servis.dohvStudenta(this.username).subscribe((std: Student) => {
      this.student = std;
      if (this.student.status == "neaktivan")
        document.getElementById("promena").click();
    
      else
        document.getElementById("radi").click();
    });
  }

  user: Student;
  username: String;
  student: Student;

  kraj() {
    localStorage.setItem("korisnik", "");
  }
}
