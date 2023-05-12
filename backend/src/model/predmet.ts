import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Predmet = new Schema({
  naziv: {
    type: String
  },
  sifra: {
    type: String
  },
  tip: {
    type: String
  },
  espb: {
    type: String
  },
  smer: {
    type: String
  },
  fond_casova: {
    type: String
  },
  cilj: {
    type: String
  },
  termin_predavanja: {
    type: String
  },
  termin_vezbi: {
    type: String
  },
  lab_vezbe: {
    type: String
  },
  propozicije: {
    type: String
  },
  nastavnik_predavanje1: {
    type:String
  },
  nastavnik_predavanje2: {
    type:String
  },
  nastavnik_vezbe1: {
    type:String
  },
  nastavnik_vezbe2: {
    type:String
  },
  semestar: {
    type:Number
  }
});
export default mongoose.model("Predmet", Predmet, "predmet");