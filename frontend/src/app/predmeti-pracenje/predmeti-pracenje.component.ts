import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Predmet } from '../model/predmet.model';
import { Student } from '../model/student.model';
import { StudentPredmet } from '../model/studentPredmet.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';

@Component({
  selector: 'app-predmeti-pracenje',
  templateUrl: './predmeti-pracenje.component.html',
  styleUrls: ['./predmeti-pracenje.component.css']
})
export class PredmetiPracenjeComponent implements OnInit {

  constructor(private servis:ServisPredmetService,private ruter:Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem("korisnik"));
    
    this.servis.dohvSlusanjePredmeta(this.korisnik.username).subscribe((std: StudentPredmet[]) => {
      this.moji = std;
      this.removeDuplicates(this.moji);
    
    });
    this.servis.dohvatiSvePredmete().subscribe((std: Predmet[]) => {
      this.sviPredmeti = std;
    });

  }

  removeDuplicates(niz){
    
    label:for(let i=0;i<niz.length;i++){
          for(var j=0; j<this.temp.length;j++ ){//check duplicates
              if(this.temp[j]==niz[i])//skip if already present 
                 continue label;      
          }
          this.temp[this.temp.length] = this[i];
    }
    
   } 
   
  temp: StudentPredmet[];
  korisnik: Student;
  mojiPredmeti: Predmet[];
  sviPredmeti: Predmet[];
  moji: StudentPredmet[];
  
  radi(predmet) {
    localStorage.setItem("predmet", JSON.stringify(predmet.sifra));
    this.ruter.navigate(["predmet"]);
  }
}
