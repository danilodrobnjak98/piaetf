import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { IstrazivanjaComponent } from './istrazivanja/istrazivanja.component';
import { ProjektiNaukaComponent } from './projekti-nauka/projekti-nauka.component';
import { ProjektiPonudeComponent } from './projekti-ponude/projekti-ponude.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NeregistrovanComponent } from './neregistrovan/neregistrovan.component';
import { DodajObavestenjeComponent } from './dodaj-obavestenje/dodaj-obavestenje.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { IzmenaObavestenjaComponent } from './izmena-obavestenja/izmena-obavestenja.component';
import { AzurirajComponent } from './azuriraj/azuriraj.component';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { StudentComponent } from './student/student.component';
import { DodajKorisnikaComponent } from './dodaj-korisnika/dodaj-korisnika.component';
import { ObrisiKorisnikaComponent } from './obrisi-korisnika/obrisi-korisnika.component';
import { DodajPredmetComponent } from './dodaj-predmet/dodaj-predmet.component';
import { ProfilComponent } from './profil/profil.component';
import { PromenaLozinkeKorisnilkComponent } from './promena-lozinke-korisnilk/promena-lozinke-korisnilk.component';
import { PredmetiPracenjeComponent } from './predmeti-pracenje/predmeti-pracenje.component';
import { PromenaLozinkeStudentComponent } from './promena-lozinke-student/promena-lozinke-student.component';
import { PredmetComponent } from './predmet/predmet.component';
import { ObrisiPredmetComponent } from './obrisi-predmet/obrisi-predmet.component';
import { DodajPObavestenjeComponent } from './dodaj-pobavestenje/dodaj-pobavestenje.component';
import { IzmeniPObavestenjeComponent } from './izmeni-pobavestenje/izmeni-pobavestenje.component';
import { AzurirajPredmetComponent } from './azuriraj-predmet/azuriraj-predmet.component';
import { DodajSlikuComponent } from './dodaj-sliku/dodaj-sliku.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { PredmetObavestenjaComponent } from './predmet-obavestenja/predmet-obavestenja.component';
import { PredmetInformacijeComponent } from './predmet-informacije/predmet-informacije.component';
import { PredmetPredavanjeComponent } from './predmet-predavanje/predmet-predavanje.component';
import { PredmetVezbeComponent } from './predmet-vezbe/predmet-vezbe.component';
import { PredmetIspitnaPitanjaComponent } from './predmet-ispitna-pitanja/predmet-ispitna-pitanja.component';
import { PredmetLaboratorijaComponent } from './predmet-laboratorija/predmet-laboratorija.component';
import { SiPredmetiComponent } from './si-predmeti/si-predmeti.component';
import { RtiPredmetiComponent } from './rti-predmeti/rti-predmeti.component';
import { OstaliPredmetiComponent } from './ostali-predmeti/ostali-predmeti.component';
import { MasterPredmetiComponent } from './master-predmeti/master-predmeti.component';
import { KadarComponent } from './kadar/kadar.component';
import { PrijavaPredmetaComponent } from './prijava-predmeta/prijava-predmeta.component';
import { ObrisiPredmetObavestenjeComponent } from './obrisi-predmet-obavestenje/obrisi-predmet-obavestenje.component';
import { PredmetNastavnikComponent } from './predmet-nastavnik/predmet-nastavnik.component';
import { InfoPredmetNastavnikComponent } from './info-predmet-nastavnik/info-predmet-nastavnik.component';
import { PredavanjaPredmetNastavnikComponent } from './predavanja-predmet-nastavnik/predavanja-predmet-nastavnik.component';
import { VezbePredmetNastavnikComponent } from './vezbe-predmet-nastavnik/vezbe-predmet-nastavnik.component';
import { IspitnaPitanjaNastavnikComponent } from './ispitna-pitanja-nastavnik/ispitna-pitanja-nastavnik.component';
import { LabPredmetNastavnikComponent } from './lab-predmet-nastavnik/lab-predmet-nastavnik.component';
import { AdminStudentPredmetComponent } from './admin-student-predmet/admin-student-predmet.component';


@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    KontaktComponent,
    IstrazivanjaComponent,
    ProjektiNaukaComponent,
    ProjektiPonudeComponent,
    PrijavaComponent,
    RegistracijaComponent,
    AdminComponent,
    NeregistrovanComponent,
    DodajObavestenjeComponent,
    ObavestenjaComponent,
    IzmenaObavestenjaComponent,
    AzurirajComponent,
    KorisnikComponent,
    StudentComponent,
    DodajKorisnikaComponent,
    ObrisiKorisnikaComponent,
    DodajPredmetComponent,
    ProfilComponent,
    PromenaLozinkeKorisnilkComponent,
    PredmetiPracenjeComponent,
    PromenaLozinkeStudentComponent,
    PredmetComponent,
    ObrisiPredmetComponent,
    DodajPObavestenjeComponent,
    IzmeniPObavestenjeComponent,
    AzurirajPredmetComponent,
    DodajSlikuComponent,
    ZaposleniComponent,
    PredmetObavestenjaComponent,
    PredmetInformacijeComponent,
    PredmetPredavanjeComponent,
    PredmetVezbeComponent,
    PredmetIspitnaPitanjaComponent,
    PredmetLaboratorijaComponent,
    SiPredmetiComponent,
    RtiPredmetiComponent,
    OstaliPredmetiComponent,
    MasterPredmetiComponent,
    KadarComponent,
    PrijavaPredmetaComponent,
    ObrisiPredmetObavestenjeComponent,
    PredmetNastavnikComponent,
    InfoPredmetNastavnikComponent,
    PredavanjaPredmetNastavnikComponent,
    VezbePredmetNastavnikComponent,
    IspitnaPitanjaNastavnikComponent,
    LabPredmetNastavnikComponent,
    AdminStudentPredmetComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
