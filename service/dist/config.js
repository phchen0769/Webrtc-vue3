"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
/**
 * 初始化 express
 * @param app
 * @returns
 */
function initApp() {
    let app = (0, express_1.default)();
    let http_server = http_1.default.createServer(app);
    http_server.listen(3003);
    let io = new socket_io_1.Server(http_server, {
        path: "/rtc",
        // 允许跨域访问
        cors: {
            origin: "*"
        }
    });
    http_server.on("listening", () => {
        let addr = http_server.address();
        if (addr) {
            let port = typeof addr === "string" ? addr : addr.port;
            console.log(`Listening on ${port}`);
        }
    });
    return io;
}
exports.default = initApp;
//# sourceMappingURL=config.js.map