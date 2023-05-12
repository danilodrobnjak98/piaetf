"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
        type: String
    },
    nastavnik_predavanje2: {
        type: String
    },
    nastavnik_vezbe1: {
        type: String
    },
    nastavnik_vezbe2: {
        type: String
    },
    semestar: {
        type: Number
    }
});
exports.default = mongoose_1.default.model("Predmet", Predmet, "predmet");
//# sourceMappingURL=predmet.js.map