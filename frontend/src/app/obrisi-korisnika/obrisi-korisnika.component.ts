import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../model/nastavnik.model';
import { Student } from '../model/student.model';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-obrisi-korisnika',
  templateUrl: './obrisi-korisnika.component.html',
  styleUrls: ['./obrisi-korisnika.component.css']
})
export class ObrisiKorisnikaComponent implements OnInit {

  constructor(private servis:ServisPrviService) { }

  ngOnInit(): void {
    this.str = "";
    this.tipp = "";
    this.student = "student";
    this.zaposlen = "zaposlen";

    this.servis.dohvSveStudente().subscribe((studenti: Student[]) => {
      this.sviStudenti = studenti;
    });
    this.servis.dohvSveZaposlene().subscribe((nast: Nastavnik[]) => {
      this.sviNastavnici = nast;
    });
  }
  tipp: String;
  student: String;
  zaposlen: String;
  str: String;
  sviStudenti: Student[];
  sviNastavnici: Nastavnik[];

  ukloniStudenta(std) {

    
    this.servis.obrisiStudenta(std.username).subscribe();
    this.ngOnInit();
  }
  ukloniNastavnika(nast) {
    this.servis.obrisiZaposlenog(nast.username).subscribe();
    this.ngOnInit();
  }

}
