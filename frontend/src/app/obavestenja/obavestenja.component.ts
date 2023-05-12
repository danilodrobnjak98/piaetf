import { Component, OnInit } from '@angular/core';
import { Obavestenje } from '../model/obavestenje.model';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-obavestenja',
  templateUrl: './obavestenja.component.html',
  styleUrls: ['./obavestenja.component.css']
})
export class ObavestenjaComponent implements OnInit {

  constructor(private servis: ServisPrviService) { }

  ngOnInit(): void {
    this.servis.dohvatiSvaObavestenja().subscribe((obv: Obavestenje[]) => {
      this.svaObavestenja = obv;
      
    });
   
  }

  svaObavestenja: Obavestenje[];
  dann: number;
  mesecc: number;
  godinaa: number;
  
 
  
 
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

   
   
    if (this.calculateDiff(DAT) > 90) {


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
