import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Materijali = new Schema({
  sifra: {
    type: String
  },
  
  tip: {
    type: String
  },
  ime_fajla: {
    type: String
  },
  datum: {
    type:String
  },
  velicina: {
    type:String
  },
  username: {
    type:String
  },
  tekst: {
    type:String
  }
});
export default mongoose.model("Materijali", Materijali, "materijali");