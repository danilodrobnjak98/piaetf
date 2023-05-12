"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
        type: String
    },
    sadrzaj_pdf: {
        type: String
    },
    username: {
        type: String
    }
});
exports.default = mongoose_1.default.model("PredmetObavestenja", PredmetObavestenja, "predmetObavestenja");
//# sourceMappingURL=predmetObavestenja.js.map