"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
exports.default = mongoose_1.default.model("Student", Student, "student");
//# sourceMappingURL=student.js.map