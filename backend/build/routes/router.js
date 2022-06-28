"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mapRouter_1 = __importDefault(require("./mapRouter"));
const router = express_1.default.Router();
router.use("/get-weather", mapRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map