import { Component, OnInit } from '@angular/core';
import { Materijali } from '../model/materijali.model';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-predmet-vezbe',
  templateUrl: './predmet-vezbe.component.html',
  styleUrls: ['./predmet-vezbe.component.css']
})
export class PredmetVezbeComponent implements OnInit {

  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {

    this.sifra = JSON.parse(localStorage.getItem("predmet"));
    this.servis.dohvJedanPredmet(this.sifra).subscribe((pr: Predmet) => {
      this.predmet = pr;
    });

    this.servis.dohvMaterijale(this.sifra, "vezbe").subscribe((mm: Materijali[]) => {
      this.materijali = mm;
    });
  }


  predmet: Predmet;
  sifra: String;
  materijali: Materijali[];

}
