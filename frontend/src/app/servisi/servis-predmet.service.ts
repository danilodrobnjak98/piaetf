import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServisPredmetService {

  constructor(private http: HttpClient) { }
  uri = 'http://localhost:4000'






  dohvatiSvePredmete(){
    return this.http.get(`${this.uri}/dohvatiSvePredmete`);
  }
  obrisiPredmet(sifra) {
    const data = {
      sifra:sifra
    }
    return this.http.post(`${this.uri}/obrisiPredmet`, data);
  }
  dodajPredmet(naziv,sifra,tip,espb,smer,fond_casova,cilj,termin_predavanja,termin_vezbi,lab_vezbe,propozicije, semestar, nastavnik_predavanje1,nastavnik_predavanje2,nastavnik_vezbe1,nastavnik_vezbe2,) {
    const data = {
      
      naziv :naziv,
      sifra: sifra,
      tip: tip,
      espb: espb,
      smer: smer,
      cilj: cilj,
      fond_casova: fond_casova,
      termin_predavanja: termin_predavanja,
      termin_vezbi: termin_vezbi,
      lab_vezbe: lab_vezbe,
      propozicije: propozicije,
      semestar:semestar,
      nastavnik_predavanje1 :nastavnik_predavanje1,
      nastavnik_predavanje2: nastavnik_predavanje2,
      nastavnik_vezbe1: nastavnik_vezbe1,
      nastavnik_vezbe2:nastavnik_vezbe2
    }
    return this.http.post(`${this.uri}/dodajPredmet`, data);
  }
  dodajPObavestenje(sifra,sadrzaj,naslov,sadrzaj_pdf,username) {
    const data = {
      sifra: sifra,
      sadrzaj: sadrzaj,
      naslov: naslov,
      sadrzaj_pdf: sadrzaj_pdf,
      username:username
    }
    return this.http.post(`${this.uri}/dodajPObavestenje`, data);
  }
  dohvTrenutniPredmet(username) {
    const data = {
      username:username
    }
    return this.http.post(`${this.uri}/dohvTrenutniPredmet`, data);
  }
  dohvTrenutniPredmetLab(username) {
    const data = {
      username:username
    }
    return this.http.post(`${this.uri}/dohvTrenutniPredmetLab`, data);
  }
  dohvJedanPredmet(sifra) {
    const data = {
      sifra:sifra
    }
    return this.http.post(`${this.uri}/dohvJedanPredmet`, data);
  }
  azurirajPredmet(sifra,tip,espb,termin_predavanja,termin_vezbi,lab_vezbe,propozicije, semestar, nastavnik_predavanje1,nastavnik_predavanje2,nastavnik_vezbe1,nastavnik_vezbe2,) {
    const data = {
      
     
      sifra: sifra,
      tip: tip,
      espb: espb,
    
    
      
      termin_predavanja: termin_predavanja,
      termin_vezbi: termin_vezbi,
      lab_vezbe: lab_vezbe,
      propozicije: propozicije,
      semestar:semestar,
      nastavnik_predavanje1 :nastavnik_predavanje1,
      nastavnik_predavanje2: nastavnik_predavanje2,
      nastavnik_vezbe1: nastavnik_vezbe1,
      nastavnik_vezbe2:nastavnik_vezbe2
    }
    return this.http.post(`${this.uri}/azurirajPredmet`, data);
  }
  dodajSliku(username, url) {
    const data = {
      username: username,
      url:url
    }
    return this.http.post(`${this.uri}/dodajSliku`, data);
  }
  dohvSliku(username) {
    const data = {
      username:username
    }
    return this.http.post(`${this.uri}/dohvSlike`, data);
  }
  dohvSIPredmete() {
    
    
    return this.http.get(`${this.uri}/dohvSIPrednete`);
  }

  dohvPredmeteSemestar(smer, semestar) {
    const data = {
      semestar: semestar,
      smer:smer
    }
    return this.http.post(`${this.uri}/dohvPredmeteSemestar`, data);
  }
  dodajSlusanjePredmeta(username, sifra,naziv) {
    const data = {
      username: username,
      sifra: sifra,
      naziv:naziv
    }
    return  this.http.post(`${this.uri}/dodajSlusanjePredmeta`, data);
  }
  dohvSlusanjePredmeta(username) {
    const data = {
      username: username,
     
    }
    return this.http.post(`${this.uri}/dohvSlusanjePredmeta`, data);
  }
  postojiPredmet(username,sifra) {
    const data = {
      username: username,
      sifra:sifra
     
    }
    return this.http.post(`${this.uri}/postojiPredmet`, data);
  }
  dohvSvaPredmetnaObavestenja(sifra) {
    const data = {
    
      sifra:sifra
     
    }
    return this.http.post(`${this.uri}/dohvSvaPredmetnaObavestenja`, data);
  }
  dohvSvaPredmetnaObavestenjaPoUsername(username) {
    const data = {
    
      username:username
     
    }
    return this.http.post(`${this.uri}/dohvSvaPredmetnaObavestenjaPoUsername`, data);
  }
  obrisiPredmetObavestenje(naslov) {
    const data = {
    
      naslov:naslov
     
    }
    return this.http.post(`${this.uri}/obrisiPredmetObavestenje`, data);
  }
  azurirajPredmetObavestenja(naslov,sadrzaj,datum,sadrzaj_pdf) {
    const data = {
    
      naslov: naslov,
      sadrzaj: sadrzaj,
      sadrzaj_pdf: sadrzaj_pdf,
      datum:datum
     
    }
    return this.http.post(`${this.uri}/azurirajPredmetObavestenja`, data);
  }
  dohvOdredjenoPredmetnoObavestenje(naslov) {
    const data = {
    
     naslov:naslov
    }
    return this.http.post(`${this.uri}/dohvOdredjenoPredmetnoObavestenje`, data);
  }
  dohvMaterijale(sifra,tip) {
    const data = {
      sifra: sifra,
      tip:tip
    }
    return this.http.post(`${this.uri}/dohvMaterijale`, data);
  }
  dohvMaterijaleNaziv(naziv,tip) {
    const data = {
      naziv: naziv,
      tip:tip
    }
    return this.http.post(`${this.uri}/dohvMaterijaleNaziv`, data);
  }
  dohvMaterijaleZaNastavu(username,tip) {
    const data = {
      username: username,
      tip:tip
    }
    return this.http.post(`${this.uri}/dohvMaterijaleZaNastavu`, data);
  }
  azurirajPredmetProfesor(sifra,tip,espb,termin_predavanja,termin_vezbi,lab_vezbe, propozicije,semestar) {
    const data = {
      sifra: sifra,
      tip: tip,
      espb: espb,
  
  
    
    termin_predavanja: termin_predavanja,
    termin_vezbi: termin_vezbi,
    lab_vezbe: lab_vezbe,
    propozicije: propozicije,
    semestar:semestar,
    }
    return this.http.post(`${this.uri}/azurirajPredmetProfesor`, data);
  }
  dodajMaterijal(sifra,tip,ime_fajla,velicina,username,tekst) {
    const data = {
      sifra: sifra,
      tip: tip,
      ime_fajla: ime_fajla,
      velicina: velicina,
      username: username,
      tekst: tekst
      
    }
    return this.http.post(`${this.uri}/dodajMaterijal`, data);
  }
  obrisiMaterijal(ime_fajla) {
    const data = {
    
  
      ime_fajla: ime_fajla,
      
    }
    return this.http.post(`${this.uri}/obrisiMaterijal`, data);
  }
  postojiSlika(username) {
    const data = {
    
  
      username:username
      
    }
    return this.http.post(`${this.uri}/postojiSlika`, data);
  }
  

  
}
