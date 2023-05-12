import { Component, OnInit } from '@angular/core';
import { Materijali } from '../model/materijali.model';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-predmet-ispitna-pitanja',
  templateUrl: './predmet-ispitna-pitanja.component.html',
  styleUrls: ['./predmet-ispitna-pitanja.component.css']
})
export class PredmetIspitnaPitanjaComponent implements OnInit {

  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {

    this.sifra = JSON.parse(localStorage.getItem("predmet"));
    this.servis.dohvJedanPredmet(this.sifra).subscribe((pr: Predmet) => {
      this.predmet = pr;
    });

    this.servis.dohvMaterijale(this.sifra, "ispit").subscribe((mm: Materijali[]) => {
      this.materijali = mm;
    });
  }


  predmet: Predmet;
  sifra: String;
  materijali: Materijali[];

}
