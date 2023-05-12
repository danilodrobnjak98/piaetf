import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Obavestenje = new Schema({
  sadrzaj: {
    type: String
  },
  naslov: {
    type: String
  },
  tip: {
    type: String
  },
  datum: {
    type: String
  }

});

export default mongoose.model("Obavestenje", Obavestenje, "obavestenja");