import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Nastavnik = new Schema({
  username: {
    type:String
  },
  password: {
    type:String
  },
  ime: {
    type:String
  },
  prezime: {
    type:String
  },
  adresa: {
    type:String
  },
  mobilni: {
    type:String
  },
  sajt: {
    type:String
  },
  licni_podaci: {
    type:String
  },
  zvanje: {
    type:String
  },
  kabinet: {
    type:String
  },
  status: {
    type:String
  }

});

export default mongoose.model("Nastavnik", Nastavnik, "nastavnik");
