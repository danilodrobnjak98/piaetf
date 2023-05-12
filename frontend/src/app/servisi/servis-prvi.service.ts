import { TitleCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { summaryForJitFileName } from '@angular/compiler/src/aot/util';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServisPrviService {

  constructor(private http: HttpClient) { }
  uri = 'http://localhost:4000'

  login(username, password){
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/login`, data);
  }
  dohvatiSvaObavestenja() {
    
    return this.http.get(`${this.uri}/dohvatiSvaObavestenja`);
  }

  dodajObavestenj(sadrzaj,naslov,tip) {
    const data = {
      sadrzaj: sadrzaj,
      naslov: naslov,
      tip: tip
     
    }
    return this.http.post(`${this.uri}/dodajObavestenje`, data);
  }
  azurirajObavestenje(sadrzaj, naslov) {
    const data = {
      sadrzaj: sadrzaj,
      naslov: naslov
    }
    return this.http.post(`${this.uri}/azurirajObavestenje`, data);
  }
  loginKorisnik(username, password){
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/loginKorisnik`, data);
  }

  loginStudent(username, password){
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/loginStudent`, data);
  }
  dohvSveStudente() {
    
    return this.http.get(`${this.uri}/dohvSveStudente`);
  }
  dohvSveZaposlene() {
    
    return this.http.get(`${this.uri}/dohvSveZaposlene`);
  }
  dodajStudenta(username,password,indeks,tip,ime,prezime,status) {
    const data = {
      username: username,
      password: password,
      indeks: indeks,
      tip: tip,
      ime: ime,
      prezime: prezime,
      status:status
     
    }
    return this.http.post(`${this.uri}/dodajStudenta`, data);
  }
  dodajZaposlenog(username,password,ime,prezime,adresa,mobilni,sajt,podaci,kabinet,zvanje,status) {
    const data = {
      username: username,
      password: password,
      ime: ime,
      prezime: prezime,
      adresa: adresa,
      mobilni: mobilni,
      sajt: sajt,
      licni_podaci: podaci,
      kabinet: kabinet,
      status: status,
      zvanje:zvanje
      
     
    }
    return this.http.post(`${this.uri}/dodajZaposlenog`, data);
  }
  obrisiZaposlenog(username) {
    const data = {
      username:username
    }
    return this.http.post(`${this.uri}/obrisiZaposlenog`, data);
  }
  obrisiStudenta(username) {
    const data = {
      username:username
    }
    return this.http.post(`${this.uri}/obrisiStudenta`, data);
  }
  dohvZaposlenog(username) {
    
    const data = {
      username:username
    }
    return this.http.post(`${this.uri}/dohvZaposlenog`, data);
  }
  azurirajProfil(username, adresa, telefon, biografija, kabinet) {
    const data = {
      username: username,
      adresa: adresa,
      telefon: telefon,
      biografija: biografija,
      kabinet:kabinet
    }
    return this.http.post(`${this.uri}/azurirajProfil`, data);
  }
  azurirajLozinku(username, password) {
    const data = {
      username: username,
      password:password
    }
    return this.http.post(`${this.uri}/azurirajLozinku`, data);
  }
  azurirajLozinkuStudent(username, password) {
    const data = {
      username: username,
      password:password
    }
    return this.http.post(`${this.uri}/azurirajLozinkuStudent`, data);
  }
  dohvStudenta(username) {
    
    const data = {
      username:username
    }
    return this.http.post(`${this.uri}/dohvStudenta`, data);
  }
  adminAzuriraZaposlenog(username, prezime, adresa, telefon, biografija, kabinet, zvanje) {
    const data = {
      username: username,
      prezime: prezime,
      adresa: adresa,
      telefon: telefon,
      biografija: biografija,
      kabinet: kabinet,
      zvanje:zvanje
    }
    return this.http.post(`${this.uri}/adminAzuriraZaposlenog`, data);
  }
  postojiIndeks(indeks) {
    const data = {
      indeks:indeks
    }
    return this.http.post(`${this.uri}/postojiIndeks`, data);
  }
  dohvPoslednji() {
    
    return this.http.get(`${this.uri}/dohvPoslednji`);

  }
  azurirajPoslednji(poslednji) {
    const data = {
      poslednji:poslednji
    }
    return this.http.post(`${this.uri}/azurirajPoslednji`, data);
  }

  
}
