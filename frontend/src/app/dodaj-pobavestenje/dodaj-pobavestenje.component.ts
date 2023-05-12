import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../model/nastavnik.model';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-dodaj-pobavestenje',
  templateUrl: './dodaj-pobavestenje.component.html',
  styleUrls: ['./dodaj-pobavestenje.component.css']
})
export class DodajPObavestenjeComponent implements OnInit {

  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {


    this.user = JSON.parse(localStorage.getItem("korisnik"));
    this.username = this.user.username;
    this.konacnaPoruka = "";
    this.poruka1 = "";
    this.sadrzaj = "";
    this.pdf_sadrzaj = "";
    this.naslov = "";
    this.servis.dohvTrenutniPredmet(this.username).subscribe((pr: Predmet[]) => {
      this.sviPredmeti = pr;
    })
  }


  konacnaPoruka: String;
  poruka1: String;
  sadrzaj: String;
  sifra: String;
  sviPredmeti: Predmet[];
  user: Nastavnik;
  username: String;
  pdf_sadrzaj: String;
  naslov: String;
  add() {
    if (this.sadrzaj == "" || this.sifra=="" || this.naslov=="") {
      this.poruka1 = "Niste uneli sve podatke!";
      return;
    }

    

    this.servis.dodajPObavestenje(this.sifra, this.sadrzaj,this.naslov,this.pdf_sadrzaj,this.username).subscribe();

    this.konacnaPoruka = "Uspesno ste objavili obavestenje!";

    
  }
}
