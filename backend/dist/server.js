"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const admin_1 = __importDefault(require("./model/admin"));
const obavestenje_1 = __importDefault(require("./model/obavestenje"));
const nastavnik_1 = __importDefault(require("./model/nastavnik"));
const student_1 = __importDefault(require("./model/student"));
const predmet_1 = __importDefault(require("./model/predmet"));
const predmetObavestenja_1 = __importDefault(require("./model/predmetObavestenja"));
const slike_1 = __importDefault(require("./model/slike"));
const studentPredmet_1 = __importDefault(require("./model/studentPredmet"));
const materijali_1 = __importDefault(require("./model/materijali"));
const pomocna_1 = __importDefault(require("./model/pomocna"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/rti');
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log('Uspesna konekcija na RTI bazu');
});
const router = express_1.default.Router();
router.route('/login').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    admin_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/dohvatiSvaObavestenja').get((req, res) => {
    obavestenje_1.default.find({}, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dodajObavestenje').post((req, res) => {
    let sadrzaj = req.body.sadrzaj;
    let naslov = req.body.naslov;
    let tip = req.body.tip;
    let datum = new Date();
    let mesec = datum.getMonth();
    mesec += 1;
    let datt = datum.getDate() + "." + mesec + "." + datum.getFullYear() + ".";
    console.log(datt);
    obavestenje_1.default.insertMany([
        { 'sadrzaj': sadrzaj, 'naslov': naslov, 'tip': tip, 'datum': datt }
    ]).then(function () {
        console.log("Uspesno smo uradili insert u Obavestenja");
    }).catch(function (error) {
        console.log(error);
    });
});
router.route("/azurirajObavestenje").post((req, res) => {
    let tip;
    let sadrzaj = req.body.sadrzaj;
    let datum = new Date();
    let mesec = datum.getMonth();
    mesec += 1;
    let datt = datum.getDate() + "." + mesec + "." + datum.getFullYear() + ".";
    let naslov = req.body.naslov;
    console.log(naslov);
    // console.log(naslov + " " + datt + " " + sadrzaj);
    // obavestenje.updateOne({ "naslov": naslov }, { $set: { "sadrzaj": sadrzaj, "datum": datt } });
    let query = { "naslov": naslov };
    let value = { $set: { "sadrzaj": sadrzaj, "datum": datt } };
    obavestenje_1.default.deleteOne(query, (err) => {
        if (err)
            console.log(err);
    });
});
router.route('/loginKorisnik').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    nastavnik_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/loginStudent').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    student_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/dohvSveStudente').get((req, res) => {
    student_1.default.find({}, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dohvSveZaposlene').get((req, res) => {
    nastavnik_1.default.find({}, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dodajStudenta').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let indeks = req.body.indeks;
    let tip = req.body.tip;
    let ime = req.body.ime;
    let prezime = req.body.prezime;
    let status = req.body.status;
    student_1.default.insertMany([
        { 'username': username, 'password': password, 'indeks': indeks, 'tip': tip, 'ime': ime, 'prezime': prezime, 'status': status }
    ]).then(function () {
        console.log("Uspesno smo uradili insert u Studenta");
    }).catch(function (error) {
        console.log(error);
    });
});
router.route('/dodajZaposlenog').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let ime = req.body.ime;
    let prezime = req.body.prezime;
    let adresa = req.body.adresa;
    let mobilni = req.body.mobilni;
    let sajt = req.body.sajt;
    let licni_podaci = req.body.licni_podaci;
    let kabinet = req.body.kabinet;
    let status = req.body.status;
    let zvanje = req.body.zvanje;
    nastavnik_1.default.insertMany([
        { 'username': username, 'password': password, 'ime': ime, 'prezime': prezime, 'adresa': adresa, 'mobilni': mobilni, 'sajt': sajt, 'licni_podaci': licni_podaci, 'zvanje': zvanje, 'kabinet': kabinet, 'status': status }
    ]).then(function () {
        console.log("Uspesno smo uradili insert u Zaposlenog");
    }).catch(function (error) {
        console.log(error);
    });
});
router.route('/obrisiStudenta').post((req, res) => {
    let username = req.body.username;
    let query = { "username": username };
    student_1.default.deleteOne(query, (err) => {
        if (err)
            console.log(err);
    });
});
router.route('/obrisiZaposlenog').post((req, res) => {
    let username = req.body.username;
    let query = { "username": username };
    nastavnik_1.default.deleteOne(query, (err) => {
        if (err)
            console.log(err);
    });
});
router.route('/dohvZaposlenog').post((req, res) => {
    let username = req.body.username;
    nastavnik_1.default.findOne({ 'username': username }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dohvStudenta').post((req, res) => {
    let username = req.body.username;
    student_1.default.findOne({ 'username': username }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route("/azurirajProfil").post((req, res) => {
    let username = req.body.username;
    let adresa = req.body.adresa;
    let telefon = req.body.telefon;
    let biografija = req.body.biografija;
    let kabinet = req.body.kabinet;
    nastavnik_1.default.updateMany({ 'username': username }, { $set: { 'adresa': adresa, 'mobilni': telefon, 'licni_podaci': biografija, 'kabinet': kabinet } }, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Uspesno smo UPDATE izvrsili");
        }
    });
});
router.route("/azurirajLozinku").post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let status = "aktivan";
    nastavnik_1.default.updateMany({ 'username': username }, { $set: { 'password': password, 'status': status } }, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Uspesno smo UPDATE izvrsili");
        }
    });
});
router.route("/azurirajLozinkuStudent").post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let status = "aktivan";
    student_1.default.updateMany({ 'username': username }, { $set: { 'password': password, 'status': status } }, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Uspesno smo UPDATE izvrsili");
        }
    });
});
router.route("/adminAzuriraZaposlenog").post((req, res) => {
    let username = req.body.username;
    let prezime = req.body.prezime;
    let adresa = req.body.adresa;
    let telefon = req.body.telefon;
    let biografija = req.body.biografija;
    let kabinet = req.body.kabinet;
    let zvanje = req.body.zvanje;
    nastavnik_1.default.updateMany({ 'username': username }, { $set: { 'prezime': prezime, 'adresa': adresa, 'mobilni': telefon, 'licni_podaci': biografija, 'kabinet': kabinet, 'zvanje': zvanje } }, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Uspesno smo UPDATE izvrsili");
        }
    });
});
router.route('/dohvatiSvePredmete').get((req, res) => {
    predmet_1.default.find({}, (err, prr) => {
        if (err)
            console.log(err);
        else
            res.json(prr);
    });
});
router.route('/obrisiPredmet').post((req, res) => {
    let sifra = req.body.sifra;
    let query = { "sifra": sifra };
    predmet_1.default.deleteOne(query, (err) => {
        if (err)
            console.log(err);
    });
});
router.route('/dodajPredmet').post((req, res) => {
    let naziv = req.body.naziv;
    let sifra = req.body.sifra;
    let tip = req.body.tip;
    let espb = req.body.espb;
    let smer = req.body.smer;
    let fond_casova = req.body.fond_casova;
    let cilj = req.body.cilj;
    let termin_predavanja = req.body.termin_predavanja;
    let termin_vezbi = req.body.termin_vezbi;
    let lab_vezbe = req.body.lab_vezbe;
    let propozicije = req.body.propozicije;
    let semestar = req.body.semestar;
    let nastavnik_predavanje1 = req.body.nastavnik_predavanje1;
    let nastavnik_predavanje2 = req.body.nastavnik_predavanje2;
    let nastavnik_vezbe1 = req.body.nastavnik_vezbe1;
    let nastavnik_vezbe2 = req.body.nastavnik_vezbe2;
    predmet_1.default.insertMany([
        { 'naziv': naziv, 'sifra': sifra, 'tip': tip, 'espb': espb, 'smer': smer, 'fond_casova': fond_casova, 'cilj': cilj, 'termin_predavanja': termin_predavanja, 'termin_vezbi': termin_vezbi, 'lab_vezbe': lab_vezbe, 'propozicije': propozicije, 'nastavnik_predavanje1': nastavnik_predavanje1, 'nastavnik_predavanje2': nastavnik_predavanje2, 'nastavnik_vezbe1': nastavnik_vezbe1, 'nastavnik_vezbe2': nastavnik_vezbe2, 'semestar': semestar }
    ]).then(function () {
        console.log("Uspesno smo uradili insert u Predmet");
    }).catch(function (error) {
        console.log(error);
    });
});
router.route('/azurirajPredmet').post((req, res) => {
    let sifra = req.body.sifra;
    let tip = req.body.tip;
    let espb = req.body.espb;
    let termin_predavanja = req.body.termin_predavanja;
    let termin_vezbi = req.body.termin_vezbi;
    let lab_vezbe = req.body.lab_vezbe;
    let propozicije = req.body.propozicije;
    let semestar = req.body.semestar;
    let nastavnik_predavanje1 = req.body.nastavnik_predavanje1;
    let nastavnik_predavanje2 = req.body.nastavnik_predavanje2;
    let nastavnik_vezbe1 = req.body.nastavnik_vezbe1;
    let nastavnik_vezbe2 = req.body.nastavnik_vezbe2;
    console.log(sifra);
    predmet_1.default.updateMany({ 'sifra': sifra }, { $set: { 'tip': tip, 'espb': espb, 'termin_predavanja': termin_predavanja, 'termin_vezbi': termin_vezbi, 'lab_vezbe': lab_vezbe, 'propozicije': propozicije, 'semestar': semestar, 'nastavnik_predavanje1': nastavnik_predavanje1, 'nastavnik_predavanje2': nastavnik_predavanje2, 'nastavnik_vezbe1': nastavnik_vezbe1, 'nastavnik_vezbe2': nastavnik_vezbe2 } }).then(function () {
        console.log("Uspesno smo uradili update u Predmet");
    }).catch(function (error) {
        console.log(error);
    });
});
router.route('/dodajPObavestenje').post((req, res) => {
    let sifra = req.body.sifra;
    let sadrzaj = req.body.sadrzaj;
    let naslov = req.body.naslov;
    let sadrzaj_pdf = req.body.sadrzaj_pdf;
    let username = req.body.username;
    let dat = new Date();
    let mm = dat.getMonth();
    mm++;
    let datum = dat.getDate() + "." + mm + "." + dat.getFullYear() + ".";
    predmetObavestenja_1.default.insertMany([
        { 'sifra': sifra, 'sadrzaj': sadrzaj, 'datum': datum, 'naslov': naslov, 'sadrzaj_pdf': sadrzaj_pdf, 'username': username }
    ]).then(function () {
        console.log("Uspesno smo uradili insert u Predmet");
    }).catch(function (error) {
        console.log(error);
    });
});
router.route('/dohvTrenutniPredmet').post((req, res) => {
    let username = req.body.username;
    predmet_1.default.find({ $or: [{ 'nastavnik_predavanje1': username }, { 'nastavnik_predavanje2': username }, { 'nastavnik_vezbe1': username }, { 'nastavnik_vezbe2': username }] }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dohvTrenutniPredmetLab').post((req, res) => {
    let username = req.body.username;
    predmet_1.default.find({ $or: [{ 'nastavnik_predavanje1': username }, { 'nastavnik_predavanje2': username }, { 'nastavnik_vezbe1': username }, { 'nastavnik_vezbe2': username }] }, { $or: [{ 'lab': "da" }, { 'lab': "Da" }] }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dohvJedanPredmet').post((req, res) => {
    let sifra = req.body.sifra;
    predmet_1.default.findOne({ 'sifra': sifra }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dodajSliku').post((req, res) => {
    let username = req.body.username;
    let url = req.body.url;
    slike_1.default.insertMany([
        { 'username': username, 'url': url }
    ]).then(function () {
        console.log("Uspesno smo uradili insert u Slike" + url);
    }).catch(function (error) {
        console.log(error);
    });
});
router.route('/dohvSlike').post((req, res) => {
    let username = req.body.username;
    slike_1.default.findOne({ 'username': username }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dohvSIPrednete').get((req, res) => {
    predmet_1.default.find({ 'smer': "si" }, (err, prr) => {
        if (err)
            console.log(err);
        else
            res.json(prr);
    });
});
router.route('/dohvPredmeteSemestar').post((req, res) => {
    let semestar = req.body.semestar;
    let smer = req.body.smer;
    predmet_1.default.find({ 'semestar': semestar, 'smer': smer }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dodajSlusanjePredmeta').post((req, res) => {
    let sifra = req.body.sifra;
    let username = req.body.username;
    let naziv = req.body.naziv;
    studentPredmet_1.default.insertMany([
        { 'username': username, 'sifra': sifra, 'naziv': naziv }
    ]).then(function () {
        console.log("Uspesno smo uradili insert u StudentPredmet");
    }).catch(function (error) {
        console.log(error);
    });
});
router.route('/dohvSlusanjePredmeta').post((req, res) => {
    let username = req.body.username;
    studentPredmet_1.default.find({ 'username': username }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/postojiPredmet').post((req, res) => {
    let username = req.body.username;
    let sifra = req.body.sifra;
    studentPredmet_1.default.findOne({ 'username': username, 'sifra': sifra }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/dohvSvaPredmetnaObavestenja').post((req, res) => {
    let sifra = req.body.sifra;
    predmetObavestenja_1.default.find({ 'sifra': sifra }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dohvSvaPredmetnaObavestenjaPoUsername').post((req, res) => {
    let username = req.body.username;
    predmetObavestenja_1.default.find({ 'username': username }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/obrisiPredmetObavestenje').post((req, res) => {
    let naslov = req.body.naslov;
    let query = { "naslov": naslov };
    predmetObavestenja_1.default.deleteOne(query, (err) => {
        if (err)
            console.log(err);
    });
});
router.route("/azurirajPredmetObavestenja").post((req, res) => {
    let sadrzaj = req.body.sadrzaj;
    let sadrzaj_pdf = req.body.sadrzaj_pdf;
    let datum = req.body.datum;
    let naslov = req.body.naslov;
    predmetObavestenja_1.default.updateMany({ 'naslov': naslov }, { $set: { 'sadrzaj': sadrzaj, 'sadrzaj_pdf': sadrzaj_pdf, 'datum': datum } }, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("res.json(docs)");
        }
    });
});
router.route('/dohvOdredjenoPredmetnoObavestenje').post((req, res) => {
    let naslov = req.body.naslov;
    predmetObavestenja_1.default.findOne({ 'naslov': naslov }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dohvMaterijale').post((req, res) => {
    let sifra = req.body.sifra;
    let tip = req.body.tip;
    materijali_1.default.find({ 'sifra': sifra, 'tip': tip }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dohvMaterijaleNaziv').post((req, res) => {
    let naziv = req.body.naziv;
    let tip = req.body.tip;
    materijali_1.default.find({ 'naziv': naziv, 'tip': tip }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/dohvMaterijaleZaNastavu').post((req, res) => {
    let username = req.body.username;
    let tip = req.body.tip;
    materijali_1.default.find({ 'username': username, 'tip': tip }, (err, obv) => {
        if (err)
            console.log(err);
        else
            res.json(obv);
    });
});
router.route('/azurirajPredmetProfesor').post((req, res) => {
    let sifra = req.body.sifra;
    let tip = req.body.tip;
    let espb = req.body.espb;
    let termin_predavanja = req.body.termin_predavanja;
    let termin_vezbi = req.body.termin_vezbi;
    let lab_vezbe = req.body.lab_vezbe;
    let propozicije = req.body.propozicije;
    let semestar = req.body.semestar;
    predmet_1.default.updateMany({ 'sifra': sifra }, { $set: { 'tip': tip, 'espb': espb, 'termin_predavanja': termin_predavanja, 'termin_vezbi': termin_vezbi, 'lab_vezbe': lab_vezbe, 'propozicije': propozicije, 'semestar': semestar } }).then(function () {
        console.log("Uspesno smo uradili update u Predmet");
    }).catch(function (error) {
        console.log(error);
    });
});
router.route('/dodajMaterijal').post((req, res) => {
    let sifra = req.body.sifra;
    let tip = req.body.tip;
    let ime_fajla = req.body.ime_fajla;
    let velicina = req.body.velicina;
    let username = req.body.username;
    let tekst = req.body.tekst;
    let datum = new Date();
    let mesec = datum.getMonth();
    mesec += 1;
    let datt = datum.getDate() + "." + mesec + "." + datum.getFullYear() + ".";
    materijali_1.default.insertMany([
        { 'sifra': sifra, 'tip': tip, 'ime_fajla': ime_fajla, 'velicina': velicina, 'username': username, 'tekst': tekst, 'datum': datt }
    ]).then(function () {
        console.log("Uspesno smo uradili insert u Materijale");
    }).catch(function (error) {
        console.log(error);
    });
});
router.route('/obrisiMaterijal').post((req, res) => {
    let ime_fajla = req.body.ime_fajla;
    let query = { 'ime_fajla': ime_fajla };
    materijali_1.default.deleteOne(query, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("Uspesno radimo delete");
        }
    });
});
router.route('/postojiSlika').post((req, res) => {
    let username = req.body.username;
    let query = { 'username': username };
    slike_1.default.findOne({ 'username': username }, (err, user) => {
        if (err)
            console.log(err);
        else {
            if (user) { //ako nadje usera
                slike_1.default.deleteOne(query, (err) => {
                    if (err)
                        console.log(err);
                    else {
                        console.log("Uspesno radimo delete");
                    }
                });
            }
        }
    });
});
router.route('/postojiIndeks').post((req, res) => {
    let indeks = req.body.indeks;
    student_1.default.findOne({ 'indeks': indeks }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/dohvPoslednji').get((req, res) => {
    pomocna_1.default.findOne({}, (err, prr) => {
        if (err)
            console.log(err);
        else
            res.json(prr);
    });
});
router.route("/azurirajPoslednji").post((req, res) => {
    let poslednji = req.body.poslednji;
    pomocna_1.default.updateMany({ 'id': '1' }, { $set: { 'poslednji': poslednji } }, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Uspesno smo UPDATE izvrsili");
        }
    });
});
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map