import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../model/nastavnik.model';
import { ObavestenjaPredmeta } from '../model/obavestenjaPredmeta.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-obrisi-predmet-obavestenje',
  templateUrl: './obrisi-predmet-obavestenje.component.html',
  styleUrls: ['./obrisi-predmet-obavestenje.component.css']
})
export class ObrisiPredmetObavestenjeComponent implements OnInit {

  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("korisnik"));
    this.username = this.user.username;
    this.konacnaPoruka = "";
    this.servis.dohvSvaPredmetnaObavestenjaPoUsername(this.username).subscribe((p: ObavestenjaPredmeta[]) => {
      this.sviPredmeti = p;
    });
  
  }


  sviPredmeti:ObavestenjaPredmeta[];
  user: Nastavnik;
  username: String;
  naslov: String;

  konacnaPoruka: String;

  deletePredmet() { 
  
    if (!this.naslov) {
      alert("Niste izabrali obavestenje!");
      return;
    }

    this.servis.obrisiPredmetObavestenje(this.naslov).subscribe();


    this.ngOnInit();
    
  }
}
