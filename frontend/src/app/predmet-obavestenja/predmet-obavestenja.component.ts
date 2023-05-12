import { Component, OnInit } from '@angular/core';

import { ObavestenjaPredmeta } from '../model/obavestenjaPredmeta.model';
import { ServisPredmetService } from '../servisi/servis-predmet.service';
import { jsPDF } from "jspdf";


@Component({
  selector: 'app-predmet-obavestenja',
  templateUrl: './predmet-obavestenja.component.html',
  styleUrls: ['./predmet-obavestenja.component.css']
})
export class PredmetObavestenjaComponent implements OnInit {

  constructor(private servis:ServisPredmetService) { }

  ngOnInit(): void {
    this.sifra = JSON.parse(localStorage.getItem("predmet"));
    this.servis.dohvSvaPredmetnaObavestenja(this.sifra).subscribe((sve: ObavestenjaPredmeta[]) => {
      this.sveObjave = sve;
    });

    this.prazno="";
  }

  sifra: String;
  sveObjave: ObavestenjaPredmeta[];
  prazno: String;

  obavestenje(objava) {
   
  

    const doc = new jsPDF();
    doc.text(objava.sadrzaj_pdf, 10, 10);
    doc.save("sadrzajObjave.pdf");

  }
  diff: number;
  checkDates(datum):Boolean {

  

    if (datum.charAt(1) == ".") {
      let dan = datum.charAt(0);
      let mesec = datum.charAt(2);
      let mm = parseInt(mesec);
      mm--;
      let godina = datum.charAt(4) + datum.charAt(5) + datum.charAt(6) + datum.charAt(7);
      let DAT = new Date(godina, mm, dan);

   
   
    if (this.calculateDiff(DAT) > 7) {


      return true;
    }
    else
      return false;
    }

    else
    
    
  
    {
      let dan = datum.charAt(0) + datum.charAt(1);

    let mesec = datum.charAt(3);
    let mm = parseInt(mesec);
    mm--;


    let godina = datum.charAt(5) + datum.charAt(6) + datum.charAt(7) + datum.charAt(8);

    
   
    let DAT = new Date(godina, mm, dan);

   
   
    if (this.calculateDiff(DAT) > 7) {


      return true;
    }
    else
        return false;
    }
  }
  calculateDiff(dateSent){
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
  }
}
