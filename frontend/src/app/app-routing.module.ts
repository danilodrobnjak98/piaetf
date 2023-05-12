import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminStudentPredmetComponent } from './admin-student-predmet/admin-student-predmet.component';
import { AdminComponent } from './admin/admin.component';
import { AzurirajPredmetComponent } from './azuriraj-predmet/azuriraj-predmet.component';
import { AzurirajComponent } from './azuriraj/azuriraj.component';
import { DodajKorisnikaComponent } from './dodaj-korisnika/dodaj-korisnika.component';
import { DodajObavestenjeComponent } from './dodaj-obavestenje/dodaj-obavestenje.component';
import { DodajPObavestenjeComponent } from './dodaj-pobavestenje/dodaj-pobavestenje.component';
import { DodajPredmetComponent } from './dodaj-predmet/dodaj-predmet.component';
import { DodajSlikuComponent } from './dodaj-sliku/dodaj-sliku.component';
import { InfoPredmetNastavnikComponent } from './info-predmet-nastavnik/info-predmet-nastavnik.component';
import { IspitnaPitanjaNastavnikComponent } from './ispitna-pitanja-nastavnik/ispitna-pitanja-nastavnik.component';
import { IstrazivanjaComponent } from './istrazivanja/istrazivanja.component';
import { IzmenaObavestenjaComponent } from './izmena-obavestenja/izmena-obavestenja.component';
import { IzmeniPObavestenjeComponent } from './izmeni-pobavestenje/izmeni-pobavestenje.component';
import { KadarComponent } from './kadar/kadar.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { LabPredmetNastavnikComponent } from './lab-predmet-nastavnik/lab-predmet-nastavnik.component';
import { MasterPredmetiComponent } from './master-predmeti/master-predmeti.component';
import { NeregistrovanComponent } from './neregistrovan/neregistrovan.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { ObrisiKorisnikaComponent } from './obrisi-korisnika/obrisi-korisnika.component';
import { ObrisiPredmetObavestenjeComponent } from './obrisi-predmet-obavestenje/obrisi-predmet-obavestenje.component';
import { ObrisiPredmetComponent } from './obrisi-predmet/obrisi-predmet.component';
import { OstaliPredmetiComponent } from './ostali-predmeti/ostali-predmeti.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PredavanjaPredmetNastavnikComponent } from './predavanja-predmet-nastavnik/predavanja-predmet-nastavnik.component';
import { PredmetInformacijeComponent } from './predmet-informacije/predmet-informacije.component';
import { PredmetIspitnaPitanjaComponent } from './predmet-ispitna-pitanja/predmet-ispitna-pitanja.component';
import { PredmetLaboratorijaComponent } from './predmet-laboratorija/predmet-laboratorija.component';
import { PredmetNastavnikComponent } from './predmet-nastavnik/predmet-nastavnik.component';
import { PredmetObavestenjaComponent } from './predmet-obavestenja/predmet-obavestenja.component';
import { PredmetPredavanjeComponent } from './predmet-predavanje/predmet-predavanje.component';
import { PredmetVezbeComponent } from './predmet-vezbe/predmet-vezbe.component';
import { PredmetComponent } from './predmet/predmet.component';
import { PredmetiPracenjeComponent } from './predmeti-pracenje/predmeti-pracenje.component';
import { PrijavaPredmetaComponent } from './prijava-predmeta/prijava-predmeta.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { ProfilComponent } from './profil/profil.component';
import { ProjektiNaukaComponent } from './projekti-nauka/projekti-nauka.component';
import { ProjektiPonudeComponent } from './projekti-ponude/projekti-ponude.component';
import { PromenaLozinkeKorisnilkComponent } from './promena-lozinke-korisnilk/promena-lozinke-korisnilk.component';
import { PromenaLozinkeStudentComponent } from './promena-lozinke-student/promena-lozinke-student.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { RtiPredmetiComponent } from './rti-predmeti/rti-predmeti.component';
import { SiPredmetiComponent } from './si-predmeti/si-predmeti.component';
import { StudentComponent } from './student/student.component';
import { VezbePredmetNastavnikComponent } from './vezbe-predmet-nastavnik/vezbe-predmet-nastavnik.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';


const routes: Routes = [
  {
    path: "",component: NeregistrovanComponent, children: [

      { path: 'pocetna', component: PocetnaComponent },
      { path: 'kontakt', component: KontaktComponent },
      { path: 'istrazivanja', component: IstrazivanjaComponent },
      { path: 'projekti-nauka', component: ProjektiNaukaComponent },
      { path: 'projekti-ponude', component: ProjektiPonudeComponent },
      { path: 'prijava', component: PrijavaComponent },
      { path: 'registracija', component: RegistracijaComponent },
      { path: "obavestenje", component: ObavestenjaComponent },
      { path: "zaposleni", component: ZaposleniComponent },
      { path: "siPredmeti", component: SiPredmetiComponent },
      { path: "rtiPredmeti", component: RtiPredmetiComponent },
      { path: "ostaliPredmeti", component: OstaliPredmetiComponent },
      { path: "masterPredmeti", component: MasterPredmetiComponent },
      { path: "kadar", component: KadarComponent }
  
      
      
      
    ]
  },
  
  
  {
    path: "admin", component: AdminComponent, children: [
      { path: "dodajObavestenje", component: DodajObavestenjeComponent },
      { path: "izmenaObavestenja", component: IzmenaObavestenjaComponent },
      { path: "azuriraj", component: AzurirajComponent },
      { path: "dodajKorisnika", component: DodajKorisnikaComponent },
      { path: "obrisiKorisnika", component: ObrisiKorisnikaComponent },
      { path: "dodajPredmet", component: DodajPredmetComponent },
      { path: "obrisiPredmet", component: ObrisiPredmetComponent },
      { path: "azurirajPredmet", component: AzurirajPredmetComponent },
      { path: "dodajSliku", component: DodajSlikuComponent },
      { path: "adminStudentPredmet", component: AdminStudentPredmetComponent }
      
      
      
      
      
      
      
    ]
  },
  {
    path: "korisnik", component: KorisnikComponent, children: [
      { path: "profil", component: ProfilComponent },
      { path: "promenaLozinkeKorisnik", component: PromenaLozinkeKorisnilkComponent },
      { path: "izmeniPObavestenje", component: IzmeniPObavestenjeComponent },
      { path: "dodajPObavestenje", component: DodajPObavestenjeComponent },
      { path: "obrisiPredmetPObavestenje", component: ObrisiPredmetObavestenjeComponent },
      {
        path: "predmetProfesor", component: PredmetNastavnikComponent, children: [
          { path: "infoPredmetNastavnik", component: InfoPredmetNastavnikComponent },
          { path: "predavanjePredmetNastavnik", component: PredavanjaPredmetNastavnikComponent },
          { path: "vezbePredmetNastavnik", component: VezbePredmetNastavnikComponent },
          { path: "ispitnaPitanjaPredmetNastavnik", component: IspitnaPitanjaNastavnikComponent },
          { path: "labPredmetNastavnik", component: LabPredmetNastavnikComponent }
          
      ] }
      
      
      
      
  ] },
  {
    path: "student", component: StudentComponent, children: [
      { path: "promenaLozinkeStudent", component: PromenaLozinkeStudentComponent },
      { path: "predmetiPracenje", component: PredmetiPracenjeComponent },
      { path: "prijavaPredmeta", component: PrijavaPredmetaComponent }
      
      
    ]
  },
  {
    path: "predmet", component: PredmetComponent, children: [
      { path: "predmetObavestenje", component: PredmetObavestenjaComponent },
      { path: "informacijePredmet", component: PredmetInformacijeComponent },
      { path: "predmetPredavanja", component: PredmetPredavanjeComponent },
      { path: "vezbePredmet", component: PredmetVezbeComponent },
      { path: "predmetPitanja", component: PredmetIspitnaPitanjaComponent },
      { path: "predmetLab", component: PredmetLaboratorijaComponent }
      
    ]
  }
 
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
