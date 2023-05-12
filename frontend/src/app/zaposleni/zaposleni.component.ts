import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nastavnik } from '../model/nastavnik.model';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-zaposleni',
  templateUrl: './zaposleni.component.html',
  styleUrls: ['./zaposleni.component.css']
})
export class ZaposleniComponent implements OnInit {

  constructor(private servis:ServisPrviService,private drugi:ServisPredmetService,private ruter:Router) { }

  ngOnInit(): void {
    this.servis.dohvSveZaposlene().subscribe((zapp: Nastavnik[]) => {
      this.sviZaposleni = zapp;
    });

    this.drugi.dohvatiSvePredmete().subscribe((pred: Predmet[]) => {
      this.sviPredmeti = pred;
    });
  }

  sviZaposleni: Nastavnik[];
  sviPredmeti: Predmet[];
  radi(predmet) {
    localStorage.setItem("kadar",predmet);
    this.ruter.navigate(["kadar"]);
  }
}
