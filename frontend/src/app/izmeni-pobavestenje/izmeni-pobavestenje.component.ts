import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../model/nastavnik.model';
import { ObavestenjaPredmeta } from '../model/obavestenjaPredmeta.model';

import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-izmeni-pobavestenje',
  templateUrl: './izmeni-pobavestenje.component.html',
  styleUrls: ['./izmeni-pobavestenje.component.css']
})
export class IzmeniPObavestenjeComponent implements OnInit {

  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem("korisnik"));
    this.username = this.user.username;
    this.konacnaPoruka = "";
    this.sadrzaj = "";
    this.pdf_sadrzaj = "";
    this.naslov = "";

    this.servis.dohvSvaPredmetnaObavestenjaPoUsername(this.username).subscribe((p: ObavestenjaPredmeta[]) => {
      this.sviPredmeti = p;
    });

  }


  user: Nastavnik;
  username: String;
  konacnaPoruka: String;
  sadrzaj: String;
  pdf_sadrzaj: String;
  naslov: String;
  datum:Date;
  trenutni: ObavestenjaPredmeta;
  sviPredmeti: ObavestenjaPredmeta[];
  pomocna: number;
  konacna: String;
  add() {
   
    if (this.naslov == "") {
      alert("Niste izabrali objavu!");
      return;
    }
    

    this.datum = new Date();

    this.pomocna = this.datum.getMonth();
    this.pomocna++;

    this.konacna = this.datum.getDate() + "." + this.pomocna + "." + this.datum.getFullYear() + ".";

    
    this.servis.dohvOdredjenoPredmetnoObavestenje(this.naslov).subscribe((pr: ObavestenjaPredmeta) => {
      this.trenutni = pr;

     

    });
    if (this.sadrzaj == "")
    {
    
      this.sadrzaj = this.trenutni.sadrzaj;
    }
    if (this.pdf_sadrzaj == "") {this.pdf_sadrzaj = this.trenutni.sadrzaj_pdf;}

   
    this.servis.obrisiPredmetObavestenje(this.naslov).subscribe();
    this.servis.dodajPObavestenje(this.trenutni.sifra, this.sadrzaj, this.naslov, this.pdf_sadrzaj, this.username).subscribe();


   
  


    this.konacnaPoruka = "Uspesno ste azurirali!";
    
    this.ngOnInit();
  }
}
