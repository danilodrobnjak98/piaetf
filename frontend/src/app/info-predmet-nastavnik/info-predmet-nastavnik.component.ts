import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../model/nastavnik.model';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-info-predmet-nastavnik',
  templateUrl: './info-predmet-nastavnik.component.html',
  styleUrls: ['./info-predmet-nastavnik.component.css']
})
export class InfoPredmetNastavnikComponent implements OnInit {

  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("korisnik"));
    this.username = this.user.username;
    this.konacnaPoruka = "";
  


    this.servis.dohvTrenutniPredmet(this.username).subscribe((pr: Predmet[]) => {
      this.sviPredmeti = pr;
    });
    this.predmet = "";

  }




  user: Nastavnik;
  konacnaPoruka: String;
  username: String;
  sviPredmeti: Predmet[];
  //ngModel
  predmet: String;
  tip: String;
  espb: String;
  termin_predavanja: String;
  termin_vezbi: String;
  lab: String;
  propozicije: String;
  semestar: Number;
  predmetTekuci: Predmet;

  azuriraj() {

    if (this.predmet=="") {
      alert("Niste izabrali predmet, a to polje je obavezno!");
      return;

    }



    this.servis.dohvJedanPredmet(this.predmet).subscribe((prrr: Predmet) => {
      this.predmetTekuci = prrr;
      

    });


 
    if (!this.tip) this.tip = this.predmetTekuci.tip;

    if (!this.espb) this.espb = this.predmetTekuci.espb;
    
    if (!this.termin_predavanja) this.termin_predavanja = this.predmetTekuci.termin_predavanja;

    if (!this.termin_vezbi) this.termin_vezbi = this.predmetTekuci.termin_vezbi;
    if (!this.lab) this.lab = this.predmetTekuci.lab_vezbe;
    if (!this.propozicije) this.propozicije = this.predmetTekuci.Propozicije;
    if (!this.semestar) this.semestar = this.predmetTekuci.semestar;


  
  
 
    this.servis.azurirajPredmetProfesor(this.predmet, this.tip, this.espb, this.termin_predavanja, this.termin_vezbi, this.lab, this.propozicije, this.semestar).subscribe();




    this.konacnaPoruka = "Uspesno ste azurirali predmet";
  }
}
