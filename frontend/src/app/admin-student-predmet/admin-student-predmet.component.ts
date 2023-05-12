import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet.model';
import { Student } from '../model/student.model';
import { StudentPredmet } from '../model/studentPredmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';
import { ServisPrviService } from '../servisi/servis-prvi.service';



@Component({
  selector: 'app-admin-student-predmet',
  templateUrl: './admin-student-predmet.component.html',
  styleUrls: ['./admin-student-predmet.component.css']
})
export class AdminStudentPredmetComponent implements OnInit {

  constructor(private servis:ServisPredmetService,private pom:ServisPrviService) { }

  ngOnInit(): void {

    
    this.servis.dohvatiSvePredmete().subscribe((pr: Predmet[]) => {
      this.sviPredmeti = pr;
       
    });
    this.poruka1 = "";
    this.porukaUspeh = "";
    this.pom.dohvSveStudente().subscribe((std: Student[]) => {
      this.sviStudenti = std;
    });
  }

  sviPredmeti: Predmet[];
  trenutni: Predmet[];
 
  poruka1: String;
  porukaUspeh: String;
  username: String;
  sviStudenti: Student[];
  onChange(Value) {
  
    this.trenutni.push(Value); // or do whatever as required
  }

  dodaj() {
   
    if (this.trenutni.length == 0 || this.trenutni.length == 1) {
      this.poruka1 = "Niste izabrali nijedan predmet!";
      return;
    }
    if (!this.username) {
      alert("Niste izabrali studenta!");
      return;
    }
    this.poruka1 = "";
    this.porukaUspeh = "";

    this.trenutni.forEach(element => {

      if (element.sifra) {

        this.servis.postojiPredmet(this.username, element.sifra).subscribe((p: StudentPredmet[]) => {
          if (p) alert("Predmet " + element.naziv + " vec pratite!");
          else
            {this.servis.dodajSlusanjePredmeta(this.username, element.sifra, element.naziv).subscribe();
          this.porukaUspeh = "Uspesno ste dodali predmete na vase slusanje!";}
        });
          
        

       
      }

    });

    
  }

}
