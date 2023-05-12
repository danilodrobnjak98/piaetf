import { Component, OnInit } from '@angular/core';
import { Materijali } from '../model/materijali.model';
import { Nastavnik } from '../model/nastavnik.model';
import { Predmet } from '../model/predmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-ispitna-pitanja-nastavnik',
  templateUrl: './ispitna-pitanja-nastavnik.component.html',
  styleUrls: ['./ispitna-pitanja-nastavnik.component.css']
})
export class IspitnaPitanjaNastavnikComponent implements OnInit {

  url: string | ArrayBuffer;
  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem("korisnik"));
    this.servis.dohvTrenutniPredmet(this.user.username).subscribe((pr: Predmet[]) => {
      this.sviPredmeti = pr;
    });

    this.servis.dohvMaterijaleZaNastavu(this.user.username, "ispit").subscribe((mm: Materijali[]) => {
      this.sviMaterijali = mm;
    });

  }


  user: Nastavnik;
  username: String;
  sviPredmeti: Predmet[];
  predmet: Predmet;
  slika: String; //ime fajla
  velicina: number;
  sviMaterijali: Materijali[];

  brisanje: String;
  onSelectFile(event) { // called each time file input changes
   
    var files = event.target.files;
    this.slika = files[0].name;
    this.velicina = files[0].size/1000;

      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
        reader.readAsDataURL(event.target.files[0]); // read file as data url
  
        reader.onload = (event) => { 
        this.url = event.target.result;
        }
       
      }
  }
  add() {
   
    if (!this.predmet) {
      alert("Niste izabrali predmet!");
      return;
    }
    
   
    this.servis.dodajMaterijal(this.predmet, "ispit", this.slika, this.velicina, this.user.username, "").subscribe();

    this.ngOnInit();

  }
  delete() {

    if (!this.brisanje) {
      alert("Niste izabrali materijal!");
      return;
    }

    this.servis.obrisiMaterijal(this.brisanje).subscribe();
    this.ngOnInit();

    
  }
}
