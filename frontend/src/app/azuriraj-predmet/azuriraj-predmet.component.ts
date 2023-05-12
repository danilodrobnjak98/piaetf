import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../model/nastavnik.model';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-azuriraj-predmet',
  templateUrl: './azuriraj-predmet.component.html',
  styleUrls: ['./azuriraj-predmet.component.css']
})
export class AzurirajPredmetComponent implements OnInit {

  constructor(private servis:ServisPrviService,private drugi:ServisPredmetService) { }

  ngOnInit(): void {

    this.tip = "";
    this.espb = "";
    this.termin_predavanja = "";
    this.termin_vezbi = "";
    this.lab = "";
    this.propozicije = "";
    this.semestar = 0;


    this.porukaUspeh = "";
    this.predmet = "";
    
    this.servis.dohvSveZaposlene().subscribe((nst: Nastavnik[]) => {
      this.sviZaposleni = nst;
    });
    this.drugi.dohvatiSvePredmete().subscribe((pr: Predmet[]) => {
      this.sviPredmeti = pr;
    });
  }


  tip: String;
  espb: String;
  termin_predavanja: String;
  termin_vezbi: String;
  lab: String;
  propozicije: String;
  semestar: Number;
  vezbe: Nastavnik[];
  predavanja: Nastavnik[];
  sviZaposleni: Nastavnik[];
  predmet: String;
  sviPredmeti: Predmet[];
  porukaUspeh: String;
  pr: Predmet;
  azz() {

    if (this.predmet == "") {
      alert("Niste izabrali predmet!");
      return;
    } 

    
    
    this.drugi.dohvJedanPredmet(this.predmet).subscribe((p: Predmet) => {
      this.pr = p;
      if (this.tip == "") {
      
        this.tip = this.pr.tip;
     
      }
     
      if (this.espb == "") {
     
        this.espb = this.pr.espb;
       
      }
      if (this.termin_predavanja == "") this.termin_predavanja = this.pr.termin_predavanja;
      if (this.termin_vezbi == "") this.termin_vezbi = this.pr.termin_vezbi;
      if (this.lab == "") this.lab = this.pr.lab_vezbe;
      if (this.propozicije == "") this.propozicije = this.pr.Propozicije;
      if (this.semestar == 0) this.semestar = this.pr.semestar;
  
    
  
      let prvi, drugi, treci, cetvrti;
      prvi = this.pr.nastavnik_predavanje1;
      drugi = this.pr.nastavnik_predavanje2;
      treci = this.pr.nastavnik_vezbe1;
      cetvrti = this.pr.nastavnik_vezbe2;
  
  
      if (this.predavanja.length == 2) {
        prvi = this.predavanja[0].username;
      
      }
      else {
        prvi = this.predavanja[0].username;
        drugi = this.predavanja[1].username;
      }
      if (this.vezbe.length == 2) {
        treci = this.vezbe[0].username;
       
      }
      else {
        treci = this.vezbe[0].username;
        cetvrti = this.vezbe[1].username;
      }
      this.drugi.azurirajPredmet(this.predmet, this.tip, this.espb, this.termin_predavanja, this.termin_vezbi, this.lab, this.propozicije, this.semestar, prvi, drugi, treci, cetvrti).subscribe();
     
    });
    
   

   

   

    this.porukaUspeh = "Uspesno ste uradili update!";

  }
  onChange(Value) {
  
    this.predavanja.push(Value); // or do whatever as required
  }
  onChange2(Value) {
  
    this.vezbe.push(Value); // or do whatever as required
}

}
