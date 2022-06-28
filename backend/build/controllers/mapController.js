"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = void 0;
const node_geocoder_1 = __importDefault(require("node-geocoder"));
const axios_1 = __importDefault(require("axios"));
let options = {
    provider: 'openstreetmap'
};
let geoCoder = (0, node_geocoder_1.default)(options);
const getWeather = async (req, resp) => {
    try {
        const { lat, lng } = req.body;
        const getDataByCoords = await geoCoder.reverse({ lat: lat, lon: lng });
        const { data } = await axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(String(getDataByCoords[0].city))}&units=metric&appid=${process.env.APP_ID}`);
        resp.status(200).json(data);
    }
    catch (e) {
        console.log(e);
        resp.status(500).json("Something went wrong");
    }
};
exports.getWeather = getWeather;
//# sourceMappingURL=mapController.js.map