import mongoose from "mongoose";

const Schema = mongoose.Schema;


let PredmetObavestenja = new Schema({
  sifra: {
    type: String
  },
  sadrzaj: {
    type: String
  },
  datum: {
    type: String
  },
  naslov: {
    type:String
  },
  sadrzaj_pdf: {
    type:String
  },
  username: {
    type:String
  }

});
export default mongoose.model("PredmetObavestenja", PredmetObavestenja, "predmetObavestenja");
