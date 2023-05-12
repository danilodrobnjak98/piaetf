import { Component, OnInit } from '@angular/core';
import { Pomocna } from '../model/pomocna.model';
import { Student } from '../model/student.model';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private servis: ServisPrviService) { }

  ngOnInit(): void {

    this.ime = "";
    this.prezime = "";
    this.tip = "";
    this.poruka1 = "";
    this.poruka2 = "";
    this.poruka3 = "";
    this.poruka0 = "";
    this.username = "";
    this.password = "";
    this.status = "";
    this.indeks = "";

    this.servis.dohvSveStudente().subscribe((studenti: Student[]) => {
      this.sviStudenti = studenti;
    });
  }

  sviStudenti: Student[];
  ime: String;
  prezime: String;
  tip: String;
  poruka1: String;
  poruka2: String;
  poruka3: String;
  poruka0: String;
  username: String;
  password: String;
  status: String;
  indeks: string;
  trenutni: number;
  radni: Pomocna;
  radi() {
   
    if (this.tip == "") this.poruka0 = "Niste izabrali tip korisnika!";
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
}
