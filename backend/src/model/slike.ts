import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Slike = new Schema({
  username: {
    type: String
  },
  url: {
    type: String
  }
});

export default mongoose.model("Slike", Slike, "slike");