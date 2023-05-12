import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-si-predmeti',
  templateUrl: './si-predmeti.component.html',
  styleUrls: ['./si-predmeti.component.css']
})
export class SiPredmetiComponent implements OnInit {

  constructor(private servis:ServisPredmetService,private ruter:Router) { }

  ngOnInit(): void {


    this.servis.dohvSIPredmete().subscribe((prr: Predmet[]) => {
      this.sviPredmeti = prr;
    });

    this.servis.dohvPredmeteSemestar("si",1).subscribe((p: Predmet[]) => {
      this.prvi = p;
    });

    this.servis.dohvPredmeteSemestar("si",2).subscribe((p: Predmet[]) => {
      this.drugi = p;
    });

    this.servis.dohvPredmeteSemestar("si",3).subscribe((p: Predmet[]) => {
      this.treci = p;
    });

    this.servis.dohvPredmeteSemestar("si",4).subscribe((p: Predmet[]) => {
      this.cetvrti = p;
    });

    this.servis.dohvPredmeteSemestar("si",5).subscribe((p: Predmet[]) => {
      this.peti = p;
    });

    this.servis.dohvPredmeteSemestar("si",6).subscribe((p: Predmet[]) => {
      this.sesti = p;
    });

    this.servis.dohvPredmeteSemestar("si",7).subscribe((p: Predmet[]) => {
      this.sedmi = p;
    });

    this.servis.dohvPredmeteSemestar("si",8).subscribe((p: Predmet[]) => {
      this.osmi = p;
    });
   

  }

  sviPredmeti: Predmet[];
  prvi: Predmet[];
  drugi: Predmet[];
  treci: Predmet[];
  cetvrti: Predmet[];
  peti: Predmet[];
  sesti: Predmet[];
  sedmi: Predmet[];
  osmi: Predmet[];
  radi(predmet) {
    localStorage.setItem("predmet", JSON.stringify(predmet.sifra));
    this.ruter.navigate(["predmet"]);
  }
}
