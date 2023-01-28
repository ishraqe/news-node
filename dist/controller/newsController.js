"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewByKeyword = void 0;
const newsapi_1 = __importDefault(require("newsapi"));
const config_1 = require("../utils/config");
const newsapi = new newsapi_1.default(config_1.API_KEY);
const getNewByKeyword = (keyword) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield newsapi.v2.everything({
        q: keyword,
        language: "en",
        sortBy: "relevancy",
        page: 2
    });
    console.log(res);
    return res;
});
exports.getNewByKeyword = getNewByKeyword;