import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Student = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  indeks: {
    type: String
  },
  tip: {
    type: String
  },
  ime: {
    type: String
  },
  prezime: {
    type: String
  },
  status: {
    type: String
  }

});

export default mongoose.model("Student", Student, "student");