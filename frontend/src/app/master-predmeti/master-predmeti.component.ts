import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-master-predmeti',
  templateUrl: './master-predmeti.component.html',
  styleUrls: ['./master-predmeti.component.css']
})
export class MasterPredmetiComponent implements OnInit {

  constructor(private servis:ServisPredmetService, private ruter:Router) { }

  ngOnInit(): void {

    this.servis.dohvPredmeteSemestar("master", 1).subscribe((p: Predmet[]) => {
      this.prvi = p;
    });
    this.servis.dohvPredmeteSemestar("master", 2).subscribe((p: Predmet[]) => {
      this.drugi = p;
    });
  }

  prvi: Predmet[];
  drugi: Predmet[];


  radi(predmet) {
    localStorage.setItem("predmet", JSON.stringify(predmet.sifra));
    this.ruter.navigate(["predmet"]);
  }

}
