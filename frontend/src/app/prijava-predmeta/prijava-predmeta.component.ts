import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet.model';
import { Student } from '../model/student.model';
import { StudentPredmet } from '../model/studentPredmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-prijava-predmeta',
  templateUrl: './prijava-predmeta.component.html',
  styleUrls: ['./prijava-predmeta.component.css']
})
export class PrijavaPredmetaComponent implements OnInit {

  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {

    this.korisnik=JSON.parse(localStorage.getItem("korisnik"));
    this.servis.dohvatiSvePredmete().subscribe((pr: Predmet[]) => {
      this.sviPredmeti = pr;
       
    });
    this.poruka1 = "";
    this.porukaUspeh = "";
  }

  sviPredmeti: Predmet[];
  trenutni: Predmet[];
 
  poruka1: String;
  porukaUspeh: String;
  korisnik: Student;
  onChange(Value) {
  
    this.trenutni.push(Value); // or do whatever as required
  }

  dodaj() {
   
    if (this.trenutni.length == 0 || this.trenutni.length == 1) {
      this.poruka1 = "Niste izabrali nijedan predmet!";
      return;
    }

    this.poruka1 = "";
    this.porukaUspeh = "";

    this.trenutni.forEach(element => {

      if (element.sifra) {

        this.servis.postojiPredmet(this.korisnik.username, element.sifra).subscribe((p: StudentPredmet[]) => {
          if (p) alert("Predmet " + element.naziv + " vec pratite!");
          else
            {this.servis.dodajSlusanjePredmeta(this.korisnik.username, element.sifra, element.naziv).subscribe();
          this.porukaUspeh = "Uspesno ste dodali predmete na vase slusanje!";}
        });
          
        

       
      }

    });

    
  }
}
