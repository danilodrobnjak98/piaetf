import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nastavnik } from '../model/nastavnik.model';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  constructor(private servis:ServisPrviService,private ruter:Router) { }

  ngOnInit(): void {
   
    
   
    this.user = JSON.parse(localStorage.getItem("korisnik"));
    this.username = this.user.username;

    this.servis.dohvZaposlenog(this.username).subscribe((kor: Nastavnik) => {
     
      
      this.nastavnik = kor;
      if (this.nastavnik.status == "neaktivan") {
       
        document.getElementById("promena").click();
      }
      else
        document.getElementById("radi").click();
    });
   
  }
  user: Nastavnik;
  username: String;
  nastavnik: Nastavnik;


  kraj() {
    localStorage.setItem("korisnik", "");
  }
}
