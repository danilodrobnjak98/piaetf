import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-obrisi-predmet',
  templateUrl: './obrisi-predmet.component.html',
  styleUrls: ['./obrisi-predmet.component.css']
})
export class ObrisiPredmetComponent implements OnInit {

  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {

    this.servis.dohvatiSvePredmete().subscribe((prr: Predmet[]) => {
      this.sviPredmeti = prr;
    });
    this.konacnaPoruka = "";
  }


  sviPredmeti: Predmet[];
  konacnaPoruka: String;

  brisi() {
    this.konacnaPoruka = "";

   
    let sifra = (<HTMLInputElement>document.getElementById("el")).value;
  
    this.servis.obrisiPredmet(sifra).subscribe();


    this.konacnaPoruka = "Uspesno ste obrisali predmet!";

    this.ngOnInit();
  }
}
