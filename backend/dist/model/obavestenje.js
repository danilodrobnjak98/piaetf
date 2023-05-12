"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
exports.default = mongoose_1.default.model("Obavestenje", Obavestenje, "obavestenja");
//# sourceMappingURL=obavestenje.js.map