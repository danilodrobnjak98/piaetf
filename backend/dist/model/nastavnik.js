"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Nastavnik = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    adresa: {
        type: String
    },
    mobilni: {
        type: String
    },
    sajt: {
        type: String
    },
    licni_podaci: {
        type: String
    },
    zvanje: {
        type: String
    },
    kabinet: {
        type: String
    },
    status: {
        type: String
    }
});
exports.default = mongoose_1.default.model("Nastavnik", Nastavnik, "nastavnik");
//# sourceMappingURL=nastavnik.js.map