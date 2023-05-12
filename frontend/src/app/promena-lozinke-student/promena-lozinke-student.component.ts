import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-promena-lozinke-student',
  templateUrl: './promena-lozinke-student.component.html',
  styleUrls: ['./promena-lozinke-student.component.css']
})
export class PromenaLozinkeStudentComponent implements OnInit {

  constructor(private servis:ServisPrviService,private ruter:Router) { }

  poruka1: String;
  poruka2: String;
  poruka3: String;
  konacnaPoruka: String;
  stara: String;
  nova1: String;
  nova2: String;
  ngOnInit(): void {
    this.poruka1 = "";
    this.poruka2 = "";
    this.poruka3 = "";
    this.konacnaPoruka = "";
    this.stara = "";
    this.nova1 = "";
    this.nova2 = "";
  }
  menjaj() {

    if (this.stara == "") this.poruka1 = "Niste uneli staru lozinku!";
    if (this.nova1 == "") this.poruka2 = "Niste uneli novu lozinku!";
    if (this.nova2 == "") this.poruka3 = "Niste uneli novu lozinku!";

    if (this.stara == "" || this.nova1 == "" || this.nova2 == "") return;

    //reset
    this.poruka1 = "";
    this.poruka2 = "";
    this.poruka3 = "";

    let user = JSON.parse(localStorage.getItem("korisnik"));
    let username = user.username;

    if (this.nova1 != this.nova2) {
      alert("Lozinke nisu iste");
      return;
    }
    
    if (this.stara != user.password) {
      alert("Uneli ste neispravnu lozinku!");
      return;
    }
    
    this.servis.azurirajLozinkuStudent(username, this.nova1).subscribe();
    this.konacnaPoruka = "Uspesno ste promenili lozinku!";
    

    this.ruter.navigate(["prijava"]);
  }
}
