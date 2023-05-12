import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../model/nastavnik.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-dodaj-predmet',
  templateUrl: './dodaj-predmet.component.html',
  styleUrls: ['./dodaj-predmet.component.css']
})
export class DodajPredmetComponent implements OnInit {

  constructor(private servis:ServisPrviService,private drugi:ServisPredmetService) { }

  ngOnInit(): void {


    //poruke
    this.poruka1 = "";
    this.poruka2 = "";
    this.poruka3 = "";
    this.poruka4 = "";
    this.poruka5 = "";
    this.poruka6 = "";
    this.poruka7 = "";
    this.poruka8 = "";
    this.poruka9 = "";
    this.poruka10 = "";
    this.poruka11 = "";
    this.poruka12 = "";
    this.poruka13 = "";
    this.poruka14 = "";
    this.poruka15 = "";
    this.PorukaUspeh = "";


    //ngModel 
    this.naziv = "";
    this.sifra = "";
    this.tip = "";
    this.espb = "";
    this.smer = "";
    this.fond = "";
    this.cilj = "";
    this.termin_predavanja = "";
    this.termin_vezbi = "";
    this.lab = "";
    this.propozicije = "";
    this.semestar = 0;

    this.servis.dohvSveZaposlene().subscribe((nast: Nastavnik[]) => {
      this.sviZaposleni = nast;
    });

  }

  naziv: String;
  sifra: String;
  tip: String;
  espb: String;
  smer: String;
  fond: String;
  cilj: String;
  termin_predavanja: String;
  termin_vezbi: String;
  lab: String;
  propozicije: String;
  semestar: Number;



  poruka1: String;
  poruka2: String;
  poruka3: String;
  PorukaUspeh:String;
  poruka4: String;
  poruka5: String;
  poruka6: String;
  poruka7: String;
  poruka8: String;
  poruka9: String;
  poruka10: String;
  poruka11: String;
  poruka12: String;
  poruka13: String;
  poruka14: String;
  poruka15: String;

  sviZaposleni: Nastavnik[];
  predavanja: Nastavnik[];
  vezbe: Nastavnik[];



  dodaj() {
    
   
    this.predavanja.forEach(element => {
     
      if (element.zvanje == "istrazivac" || element.zvanje == "lab_inzenjer" || element.zvanje == "lab_tehnicar")
        this.poruka13 = "Jedan od izabranih nije predavac";
      return;
    });
    this.vezbe.forEach(element => {
     
      if (element.zvanje == "istrazivac" || element.zvanje == "lab_inzenjer" || element.zvanje == "lab_tehnicar")
        this.poruka13 = "Jedan od izabranih nije predavac";
      return;
    });
    
    if (this.naziv == "") this.poruka1 = "Niste uneli naziv";
    if (this.sifra == "") this.poruka2 = "Niste uneli sifru predmeta";
    if (this.tip == "") this.poruka3 = "Niste uneli tip predmeta";
    if (this.espb == "") this.poruka4 = "Niste uneli broj espb bodova";
    if (this.smer == "") this.poruka5 = "Niste uneli smer";
    if (this.fond == "") this.poruka6 = "Niste uneli fond";
    if (this.cilj == "") this.poruka7 = "Niste uneli cilj";
    if (this.termin_predavanja == "") this.poruka8 = "Niste uneli termin predavanja";
    if (this.termin_vezbi == "") this.poruka9 = "Niste uneli termin vezbi";
    if (this.lab == "") this.poruka10 = "Niste uneli lab info";
    if (this.propozicije == "") this.poruka11 = "Niste uneli propozicije";
    if (this.semestar == 0) this.poruka12 = "Niste uneli semestar";

    if (this.naziv == "" || this.sifra == "" || this.tip == "" || this.espb == "" || this.smer == "" || this.fond == "" || this.cilj == "" || this.termin_predavanja == "" || this.termin_vezbi == "" || this.lab == "" || this.propozicije == "" || this.semestar == 0) return;

    if (this.predavanja.length == 0 || this.vezbe.length == 0  || this.predavanja.length == 1 || this.vezbe.length == 1) {
      alert("Niste do kraja popunili!");
      return;
    }
    //reset poruka
    this.poruka1 = "";
    this.poruka2 = "";
    this.poruka3 = "";
    this.poruka4 = "";
    this.poruka5 = "";
    this.poruka6 = "";
    this.poruka7 = "";
    this.poruka8 = "";
    this.poruka9 = "";
    this.poruka10 = "";
    this.poruka11 = "";
    this.poruka12 = "";
    this.poruka13 = "";
    this.poruka14 = "";
    this.poruka15 = "";
    this.PorukaUspeh = "";

   
    let prvi, drugi, treci, cetvrti;
    prvi = "/";
    drugi = "/";
    treci = "/";
    cetvrti = "/";


    if (this.predavanja.length == 2) {
      prvi = this.predavanja[0].username;
      drugi = "/";
    }
    else {
      prvi = this.predavanja[0].username;
      drugi = this.predavanja[1].username;
    }
    if (this.vezbe.length == 2) {
      treci = this.vezbe[0].username;
      cetvrti = "/";
    }
    else {
      treci = this.vezbe[0].username;
      cetvrti = this.vezbe[1].username;
    }
    
    

    
    this.drugi.dodajPredmet(this.naziv, this.sifra, this.tip, this.espb, this.smer, this.fond, this.cilj, this.termin_predavanja, this.termin_vezbi, this.lab, this.propozicije, this.semestar, prvi, drugi, treci, cetvrti).subscribe();


    this.PorukaUspeh="Uspesno ste dodali!";

  }
  onChange(Value) {
  
    this.predavanja.push(Value); // or do whatever as required
  }
  onChange2(Value) {
  
    this.vezbe.push(Value); // or do whatever as required
}
   
}
