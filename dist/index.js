"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const router_1 = __importDefault(require("./routes/router"));
const bodyParser = require("body-parser");
const server = new server_1.default();
//configuration
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
//routes
server.app.use('/', router_1.default);
server.start(() => {
    console.log(`server started on ${server.port}`);
});
