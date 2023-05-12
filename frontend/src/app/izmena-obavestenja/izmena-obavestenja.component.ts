import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Obavestenje } from '../model/obavestenje.model';
import { ServisPrviService } from '../servisi/servis-prvi.service';

@Component({
  selector: 'app-izmena-obavestenja',
  templateUrl: './izmena-obavestenja.component.html',
  styleUrls: ['./izmena-obavestenja.component.css']
})
export class IzmenaObavestenjaComponent implements OnInit {

  constructor(private servis:ServisPrviService,private ruter:Router) { }

  ngOnInit(): void {
    this.servis.dohvatiSvaObavestenja().subscribe((obv: Obavestenje[]) => {
      this.svaObavestenja = obv;    
    });
    this.poruka = "";
    this.porukaNeuspeh = "";
    this.sadrzaj = "";
    this.tip = "";
  }

  svaObavestenja: Obavestenje[];
  sadrzaj: String;
  naslov: String;
  poruka: String;
  porukaNeuspeh: String;
  tip: String;


  menjaj(obv) {
   
    this.poruka = "";
    
    if (this.sadrzaj == "") {
      this.porukaNeuspeh = "Niste uneli nista kao novi sadrzaj!";
      return;
    }
    if (this.sadrzaj != "") this.porukaNeuspeh = "";


    localStorage.setItem("naslov", obv.naslov);
    this.servis.azurirajObavestenje(this.sadrzaj, obv.naslov).subscribe(); //brisanje starog
    this.servis.dodajObavestenj(this.sadrzaj, obv.naslov, obv.tip).subscribe();

    this.ngOnInit();

    this.poruka = "Uspesno ste azurirali objavu!";
  }
}
