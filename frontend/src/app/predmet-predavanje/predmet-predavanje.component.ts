import { Component, OnInit } from '@angular/core';
import { Materijali } from '../model/materijali.model';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-predmet-predavanje',
  templateUrl: './predmet-predavanje.component.html',
  styleUrls: ['./predmet-predavanje.component.css']
})
export class PredmetPredavanjeComponent implements OnInit {

  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {
    this.sifra = JSON.parse(localStorage.getItem("predmet"));
    this.servis.dohvJedanPredmet(this.sifra).subscribe((pr: Predmet) => {
      this.predmet = pr;
    });

    this.servis.dohvMaterijale(this.sifra, "predavanje").subscribe((mm: Materijali[]) => {
      this.materijali = mm;
    });
  }
  

  predmet: Predmet;
  sifra: String;
  materijali: Materijali[];
}
