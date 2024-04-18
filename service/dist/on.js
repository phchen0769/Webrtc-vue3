"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const enum_1 = require("./enum");
/**
 * rtc 监听
 * @param socket 初始后的socket
 * @param clients  全部用户
 */
function SocketRtc(socket, clients) {
    // 接收到《接收者》发送candidate连接成功消息，转发给《接收者》
    socket.on(enum_1.SOCKET_ON_RTC.CANDIDATE, (data) => {
        (0, utils_1.$log)(`---转发candidate---(${data.toUsername})`);
        let user = clients.get(data.toUsername);
        if (user) {
            let params = {
                data: data.data,
                toUsername: data.nowUsername,
                nowUsername: data.toUsername,
                callType: data.callType
            };
            socket.to(user.userId).emit(enum_1.SOCKET_ON_RTC.CANDIDATE, params);
        }
        else {
            (0, utils_1.$log)(`---candidate:用户失联---(${data.toUsername})`);
        }
    });
    // 接收到《发起者》发送offer，转发给《接收者》
    socket.on(enum_1.SOCKET_ON_RTC.OFFER, (data) => {
        (0, utils_1.$log)(`---转发offer---(${data.toUsername})`);
        let user = clients.get(data.toUsername);
        if (user) {
            let params = {
                data: data.data,
                toUsername: data.nowUsername,
                nowUsername: data.toUsername,
                callType: data.callType
            };
            socket.to(user.userId).emit(enum_1.SOCKET_ON_RTC.OFFER, params);
        }
        else {
            (0, utils_1.$log)(`---offer:用户失联---(${data.toUsername})`);
        }
    });
    // 接收到《接收者》发送answer，转发给《发起者》
    socket.on(enum_1.SOCKET_ON_RTC.ANSWER, (data) => {
        (0, utils_1.$log)(`---转发answer---(${data.toUsername})`);
        let user = clients.get(data.toUsername);
        if (user) {
            let params = {
                data: data.data,
                nowUsername: user.username,
                toUsername: data.toUsername,
                callType: data.callType
            };
            socket.to(user.userId).emit(enum_1.SOCKET_ON_RTC.ANSWER, params);
        }
        else {
            (0, utils_1.$log)(`---answer:用户失联---(${data.toUsername})`);
        }
    });
    // 接收到《发起者》||《接收者》发起挂断电话，转发给《发起者》||《接收者》
    socket.on(enum_1.SOCKET_ON_RTC.USER_OFF, (data) => {
        let user = clients.get(data.toUsername);
        (0, utils_1.$log)(`----${data.nowUsername}----(挂断通话)`);
        if (user) {
            let params = {
                data: null,
                nowUsername: user.username,
                toUsername: data.toUsername
            };
            socket.to(user.userId).emit(enum_1.SOCKET_ON_RTC.USER_OFF, params);
        }
        else {
            (0, utils_1.$log)(`---挂断通话:用户失联---(${data.toUsername})`);
        }
    });
    //  接收到《接收者》发起拒绝接听，转发给《发起者》
    socket.on(enum_1.SOCKET_ON_RTC.USER_REFUST, (data) => {
        let user = clients.get(data.toUsername);
        (0, utils_1.$log)(`----${data.nowUsername}----(拒绝通话)`);
        if (user) {
            let params = {
                data: null,
                nowUsername: user.username,
                toUsername: data.toUsername
            };
            socket.to(user.userId).emit(enum_1.SOCKET_ON_RTC.USER_REFUST, params);
        }
        else {
            (0, utils_1.$log)(`---拒绝通话:用户失联---(${data.toUsername})`);
        }
    });
}
exports.default = SocketRtc;
//# sourceMappingURL=on.js.map