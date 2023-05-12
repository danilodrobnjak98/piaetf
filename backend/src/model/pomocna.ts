import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Pomocna = new Schema({
  poslednji: {
    type: Number
  },
  id: {
    type:String
  }
});

export default mongoose.model("Pomocna", Pomocna, "Pomocna");
