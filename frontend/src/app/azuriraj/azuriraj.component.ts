import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../model/nastavnik.model';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-azuriraj',
  templateUrl: './azuriraj.component.html',
  styleUrls: ['./azuriraj.component.css']
})
export class AzurirajComponent implements OnInit {

  constructor(private servis:ServisPrviService) { }

  ngOnInit(): void {

    this.prezime = "";
    this.poruka1 = "";
    this.poruka2 = "";
    this.adresa = "";
    this.mobilni = "";
    this.podaci = "";
    this.zvanje = "";
    this.poruka3 = "";
    this.poruka4 = "";
    this.poruka5 = "";
    this.poruka6 = "";
    
    this.nastavnikk = "";
    this.servis.dohvSveZaposlene().subscribe((nast: Nastavnik[]) => {
      this.sviNastavnici = nast;
    });

  }


  prezime: String;
  poruka1: String;
  adresa: String;
  poruka2: String;
  mobilni: String;
  podaci: String;
  zvanje: String;
 
  poruka3: String;
  poruka4: String;
  poruka6: String;
  poruka5: String;
  kabinet: String;
  sviNastavnici: Nastavnik[];

  nastavnikk: string;
  zaposlenTekuci: Nastavnik;
  nastavnik() {
    let username = (<HTMLInputElement>document.getElementById("select")).value;
    

    this.servis.dohvZaposlenog(username).subscribe((nast: Nastavnik) => {
      this.zaposlenTekuci = nast;
    });

    if (this.prezime == "") this.prezime = this.zaposlenTekuci.prezime;
    if (this.adresa == "") this.adresa = this.zaposlenTekuci.adresa;
    if (this.mobilni == "") this.mobilni = this.zaposlenTekuci.mobilni;
    if (this.podaci == "") this.podaci = this.zaposlenTekuci.licni_podaci;
    if (this.zvanje == "") this.zvanje = this.zaposlenTekuci.zvanje;
    if (this.kabinet == "") this.kabinet = this.zaposlenTekuci.kabinet;


    this.servis.adminAzuriraZaposlenog(username, this.prezime, this.adresa, this.mobilni, this.podaci, this.kabinet, this.zvanje).subscribe();

    this.poruka6 = "Uspesno ste azurirali " + this.zaposlenTekuci.ime + "profil ";
    
    this.ngOnInit();
  }
}
