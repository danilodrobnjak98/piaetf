import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../model/nastavnik.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-dodaj-sliku',
  templateUrl: './dodaj-sliku.component.html',
  styleUrls: ['./dodaj-sliku.component.css']
})
export class DodajSlikuComponent implements OnInit {
  url: string | ArrayBuffer;

  constructor(private servis:ServisPrviService,private pom:ServisPredmetService) { }

  ngOnInit(): void {

    this.servis.dohvSveZaposlene().subscribe((nast: Nastavnik[]) => {
      this.sviZaposleni = nast;
    });
    this.poruka1 = "";
  }

  sviZaposleni: Nastavnik[];
  zaposlen: String;
  poruka1: String;
  slika: String;
 
  onSelectFile(event) { // called each time file input changes
   
    var files = event.target.files;
    this.slika = files[0].name;


      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
        reader.readAsDataURL(event.target.files[0]); // read file as data url
  
        reader.onload = (event) => { 
        this.url = event.target.result;
        }
       
      }
  }
  add() {
    this.poruka1 = "";
    if (!this.zaposlen) {
      alert("Niste izabrali zaposlenog!");
      return;
    }
    if (!this.slika) {
      alert("Niste uploadovali sliku!")
      return;
    }

    this.pom.postojiSlika(this.zaposlen).subscribe();
    
    this.pom.dodajSliku(this.zaposlen, this.slika).subscribe();


    this.poruka1 = "Uspesno ste okacili sliku!";

  }
}
