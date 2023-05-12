import { Component, OnInit } from '@angular/core';
import { Materijali } from '../model/materijali.model';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-predmet-laboratorija',
  templateUrl: './predmet-laboratorija.component.html',
  styleUrls: ['./predmet-laboratorija.component.css']
})
export class PredmetLaboratorijaComponent implements OnInit {

  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {

    this.lab1 = "Ne";
    this.lab2 = "ne";
    this.sifra = JSON.parse(localStorage.getItem("predmet"));
    this.servis.dohvJedanPredmet(this.sifra).subscribe((pr: Predmet) => {
      this.predmet = pr;
    });

    this.servis.dohvMaterijale(this.sifra, "lab").subscribe((mm: Materijali[]) => {
      this.materijali = mm;
    });
  }


  lab1: String;
  lab2: String;
  predmet: Predmet;
  sifra: String;
  materijali: Materijali[];

}
