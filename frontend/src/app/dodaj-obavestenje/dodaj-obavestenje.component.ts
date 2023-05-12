import { Component, OnInit } from '@angular/core';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-dodaj-obavestenje',
  templateUrl: './dodaj-obavestenje.component.html',
  styleUrls: ['./dodaj-obavestenje.component.css']
})
export class DodajObavestenjeComponent implements OnInit {

  constructor(private servis: ServisPrviService) { }

  ngOnInit(): void {
    this.poruka1 = "";
    this.poruka2 = "";
    this.naslov = "";
    this.sadrzaj = "";
    this.tip = "";
    this.PorukaUspeh = "";
  }
  poruka1: String;
  poruka2: String;
  poruka3: String;

  naslov: String;
  sadrzaj: String;
  tip: String;
  PorukaUspeh: String;


  dodaj() {


   this.PorukaUspeh="";
    if (this.naslov == "") this.poruka1 = "Niste uneli naslov objave!";
    if (this.sadrzaj == "") this.poruka2 = "Niste uneli sadrzaj objave!";
    if (this.tip == "") this.poruka3 = "Niste izabrali tip objave!";

    if (this.naslov == "" || this.sadrzaj == "" || this.tip == "") return;
    

    //restart

    if (this.naslov != "") this.poruka1 = "";
    if (this.sadrzaj != "") this.poruka2 = "";
    if (this.tip != "") this.poruka3 = "";

    this.servis.dodajObavestenj(this.sadrzaj, this.naslov, this.tip).subscribe();

  
    this.PorukaUspeh = "Uspesno ste okacili obavestenje!";

  }

}
