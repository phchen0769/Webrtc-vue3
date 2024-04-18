"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
const on_1 = __importDefault(require("./on"));
const config_1 = __importDefault(require("./config"));
const utils_1 = require("./utils");
const clients_1 = __importDefault(require("./clients"));
// 初始化应用
let io = (0, config_1.default)();
// 内存存储连接用户信息
let clients = new clients_1.default();
// 连接之前判断是否名字重复
io.use((socket, next) => {
    let query = socket.handshake.query;
    if (query.username) {
        if (clients.data.some(c => c.username === query.username)) {
            next(new Error("用户名已经被使用"));
        }
        else
            next();
    }
    else {
        next(new Error("参数错误"));
    }
});
// 监听连接
io.on(enum_1.SOCKET_ON_SYS.CONNECTION, function (socket) {
    // 获取连接参数(用户名,房间号(备用))
    const query = socket.handshake.query;
    const username = query.username;
    const room = query.room;
    if (!room || !username) {
        console.log("未找到用户或房间");
        return;
    }
    // 连接管理
    let nowUser = { userId: socket.id, username };
    clients.add(nowUser);
    // 房间管理
    socket.join(room);
    // 每次连接向房间发送用户列表
    io.to(room).emit(enum_1.SOCKET_EMIT.SYS_USER_LIST, clients.data);
    // 管理rtc的监听事件
    (0, on_1.default)(socket, clients);
    // 断开连接了
    socket.on(enum_1.SOCKET_ON_SYS.DISCONNECT, () => {
        (0, utils_1.$log)(`----${username}----(断开连接)`);
        clients.remove(nowUser.username);
        // 每次连接发送用户列表
        io.to(room).emit(enum_1.SOCKET_EMIT.SYS_USER_LIST, clients.data);
    });
});
//# sourceMappingURL=main.js.map