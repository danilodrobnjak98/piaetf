import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pomocna } from '../model/pomocna.model';
import { Student } from '../model/student.model';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-dodaj-korisnika',
  templateUrl: './dodaj-korisnika.component.html',
  styleUrls: ['./dodaj-korisnika.component.css']
})
export class DodajKorisnikaComponent implements OnInit {

  constructor(private servis:ServisPrviService) { }

 

  ngOnInit(): void {
    this.tipp = "";
    this.poruka0 = "";
    this.zaposlen = "zaposlen";
    this.student = "student";
    this.poruka1 = "";
    this.poruka2 = "";
    this.poruka3 = "";
    this.ime = "";
    this.prezime = "";
    this.username = "";
    this.password = "";
    this.status = "";
    this.indeks = "";
    this.tip = "";

    this.servis.dohvSveStudente().subscribe((studenti: Student[]) => {
      this.sviStudenti = studenti;
    });


    //nastavnici
   
   
   
    
   
   
   
   
    this.imee = "";
    this.poruka10 = "";
    this.poruka20 = "";
    this.poruka30 = "";
    this.poruka40 = "";
    this.poruka50 = "";
    this.prezimee = "";
    this.adresa = "";
    this.mobilni = "";
    this.sajt = "";
    this.podaci = "";
    this.zvanje = "";
    this.statusss = "";
    this.kabinet = "";
    this.poruka60 = "";
    this.user = "";
    this.loz = "";
  }

  student: String;
  zaposlen: String;
  tipp: String;
  poruka0: String;
  poruka1: String;
  poruka2: String;
  poruka3: String;
  ime: String;
  prezime: String;
  username: String;
  password: String;
  status: String;
  indeks: String;
  tip: String;
  trenutni: number;
  radni: Pomocna;
  sviStudenti: Student[];

  korisnik() {
    if (this.tip == "") {
      this.poruka0 = "Niste izabrali tip korisnika!";
      return;
    }
    this.poruka0 = "";


  }
  radi() {
    if (this.tip == "") this.poruka0 = "Niste izabrali tip studenta!";
    if (this.ime == "") this.poruka1 = "Niste uneli ime!";
    if (this.prezime == "") this.poruka2 = "Niste uneli prezime!";

    if (this.tip == "" || this.ime == "" || this.prezime == "") return;
    
    
    
    //restart
    this.poruka1 = "";
    this.poruka2 = "";
    this.poruka3 = "";
    this.poruka0 = "";
    this.username = "";
    this.password = "";
    this.status = "";
    this.indeks = "";


    let datum = new Date();
  
    this.servis.dohvPoslednji().subscribe((p: Pomocna) => {
      this.radni = p;
      this.trenutni = this.radni.poslednji;

   

    
    let konbr = "";
    if (this.trenutni % 10 == this.trenutni) {//ako je jednocifren
      
       konbr = "0" + this.trenutni;

    }
    else
       konbr =""+this.trenutni;

    this.indeks = datum.getFullYear() + "/" + "00" + konbr;

   
    this.password = "123456";
    this.username = this.prezime.charAt(0).toLowerCase() + this.ime.charAt(0).toLowerCase() + datum.getFullYear() + konbr + this.tip + "@student.etf.rs";
  
    this.status = "neaktivan";

   
   

      this.servis.dodajStudenta(this.username, this.password, this.indeks, this.tip, this.ime, this.prezime, this.status).subscribe();
      
      this.servis.azurirajPoslednji(this.trenutni+1).subscribe();
    });

    this.poruka3 = "Uspesno ste obavili registraciju";
  }
  

  //registrovanje nastavnika

  imee: string;
  poruka10: String;
  prezimee: string;
  poruka20: String;
  adresa: String;
  poruka30: String;
  mobilni: String;
  sajt: String;
  podaci: String;
  poruka40: String;
  zvanje: String;
  statusss: String;
  poruka50: String;
  kabinet: String;
  poruka60: String;
  user: string;
  loz: String;

  nastavnik() {
    

    if (this.imee == "") this.poruka10 = "Niste uneli ime!";
    if (this.prezimee == "") this.poruka20 = "Niste uneli prezime!";
    if (this.adresa == "") this.poruka30 = "Niste uneli adresu!";
    if (this.zvanje == "") this.poruka40 = "Niste uneli zvanje!";
    if (this.kabinet == "") this.poruka60 = "Niste uneli broj kabineta!";



    if (this.imee == "" || this.prezimee == "" || this.adresa == "" || this.zvanje == "" || this.kabinet=="") return;

    this.poruka10 = "";
    this.poruka20 = "";
    this.poruka30 = "";
    this.poruka40 = "";
    this.poruka60 = "";
    this.user = "";

    this.user = this.imee.toLowerCase() + this.prezimee.toLowerCase() + "@etf.bg.ac.rs";
    this.loz = "123456";
    this.statusss = "neaktivan";
    

    this.servis.dodajZaposlenog(this.user, this.loz, this.imee, this.prezimee, this.adresa, this.mobilni, this.sajt, this.podaci, this.kabinet, this.zvanje, this.statusss).subscribe();


  }


}
