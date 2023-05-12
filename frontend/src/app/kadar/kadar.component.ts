import { Component, OnInit } from '@angular/core';
import { Nastavnik } from '../model/nastavnik.model';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-kadar',
  templateUrl: './kadar.component.html',
  styleUrls: ['./kadar.component.css']
})
export class KadarComponent implements OnInit {

  constructor(private servis:ServisPrviService) { }

  ngOnInit(): void {
    
    this.user = localStorage.getItem("kadar");
 

    this.servis.dohvZaposlenog(this.user).subscribe((zap: Nastavnik) => {
     
      this.zaposlen = zap;
      this.bio = this.zaposlen.licni_podaci;
      this.kabinet = this.zaposlen.kabinet;
      if (!this.bio) this.bio = "Biografija ovog korisnika je u izradi!";
      if (!this.kabinet) this.kabinet = "Ovom zaposlenom jos nije dodeljen kabinet!";
    });


  
    
   
  }

  zaposlen: Nastavnik;
  poruka: String;
  user: String;
  bio: String;
  kabinet: String;

}
