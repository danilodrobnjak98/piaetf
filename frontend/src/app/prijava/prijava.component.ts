import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { Nastavnik } from '../model/nastavnik.model';
import { Student } from '../model/student.model';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private servis: ServisPrviService, private ruter: Router) { }

  username: String;
  password: String;
  poruka1: String;
  poruka2: String;
  konacnaPoruka: String;
  ngOnInit(): void {
    this.username = "";
    this.password = "";
    this.poruka1 = "";
    this.poruka2 = "";
    this.konacnaPoruka = "";
  }

  login() {

    if (this.username == "") this.poruka1 = "Niste uneli korisnicko ime!";
    if (this.password == "") this.poruka2 = "Niste uneli lozinku!";

    if (this.username == "" || this.password == "") return;

    //restart poruka 1 i 2 

    if (this.username != "") this.poruka1 = "";
    if (this.password != "") this.poruka2 = "";

 

    this.servis.login(this.username, this.password).subscribe((user: Admin) => { //provera da li je admin
      if (user) {
        localStorage.setItem("korisnik", JSON.stringify(user));
        this.ruter.navigate(["admin"]);
        return;
      }
      else
      { //provera da li je nastavnik
        
        this.servis.loginKorisnik(this.username, this.password).subscribe((user: Nastavnik) => {
          if (user) {
            localStorage.setItem("korisnik", JSON.stringify(user));
            this.ruter.navigate(["korisnik"]);
            return;
          }
          else { //provera da li je student
            
            this.servis.loginStudent(this.username, this.password).subscribe((user: Student) => {
              if (user) {
                localStorage.setItem("korisnik", JSON.stringify(user));
                this.ruter.navigate(["student"]);
                return;
              }
              else
              {//nista nije proslo dodati konacnu poruku!
                 
                  this.konacnaPoruka = "Takav korisnik ne postoji!";
                }
            });

          }
        
        });
      }
     
        
      
      
    });

    


   
  }

}
