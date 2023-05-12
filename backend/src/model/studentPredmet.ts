import mongoose from "mongoose";

const Schema = mongoose.Schema;


let StudentPredmet = new Schema({
  username: {
    type: String
  },
  sifra: {
    type: String
  },
  naziv: {
    type: String
  }
});


export default mongoose.model("StudentPredmet", StudentPredmet, "studentPredmet");