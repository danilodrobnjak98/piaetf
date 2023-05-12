import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-predmet-informacije',
  templateUrl: './predmet-informacije.component.html',
  styleUrls: ['./predmet-informacije.component.css']
})
export class PredmetInformacijeComponent implements OnInit {

  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {

    this.sifra = JSON.parse(localStorage.getItem("predmet"));
    this.servis.dohvJedanPredmet(this.sifra).subscribe((pr: Predmet) => {
      this.predmet = pr;
    })
  }

  predmet: Predmet;
  sifra: String;

}
