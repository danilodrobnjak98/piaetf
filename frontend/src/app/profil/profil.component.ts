import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nastavnik } from '../model/nastavnik.model';
import { Slika } from '../model/slika.model';
import { PromenaLozinkeKorisnilkComponent } from '../promena-lozinke-korisnilk/promena-lozinke-korisnilk.component';
import { ServisPredmetService } from '../servisi/servis-predmet.service';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private servis:ServisPrviService,private ruter:Router,private drugi:ServisPredmetService) { }

  ngOnInit(): void {
    this.adresa = "";
    this.telefon = "";
    this.biografija = "";
    this.kabinet = "";

    this.user = JSON.parse(localStorage.getItem("korisnik"));
    this.username = this.user.username;

    this.servis.dohvZaposlenog(this.username).subscribe((kor: Nastavnik) => {
     
      
      this.nastavnik = kor;
      
    });
   

    this.drugi.dohvSliku(this.username).subscribe((slk: Slika) =>{
      
      this.slika = slk;
    });
   
    
    this.putanja =  this.slika.url;
    
  }

  trenutna: string;
  slika: Slika;
  user: Nastavnik;
  username: String;
  adresa: String;
  telefon: String;
  biografija: String;
  kabinet: String;
  nastavnik: Nastavnik;
  poruka: String;
  putanja: string;

  azuriraj() {
    
    this.poruka="";

    if (this.adresa == "") this.adresa = this.nastavnik.adresa;
    if (this.telefon == "") this.telefon = this.nastavnik.mobilni;
    if (this.biografija == "") this.biografija = this.nastavnik.licni_podaci;
    if (this.kabinet == "") this.kabinet = this.nastavnik.kabinet;

    this.servis.azurirajProfil(this.username, this.adresa, this.telefon, this.biografija, this.kabinet).subscribe();

    this.poruka = "Uspesno ste azurirali profil!";

    this.ngOnInit();
    
  }

}
