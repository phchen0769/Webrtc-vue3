"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CALL_TYPE = exports.SOCKET_EMIT = exports.SOCKET_ON_SYS = exports.SOCKET_ON_RTC = exports.DATA_CODE = void 0;
// 返回code
var DATA_CODE;
(function (DATA_CODE) {
    DATA_CODE[DATA_CODE["OK"] = 200] = "OK";
    DATA_CODE[DATA_CODE["ERROR"] = 500] = "ERROR";
})(DATA_CODE || (exports.DATA_CODE = DATA_CODE = {}));
// rtc on 消息
var SOCKET_ON_RTC;
(function (SOCKET_ON_RTC) {
    // rtc 建立连接回调
    SOCKET_ON_RTC["CANDIDATE"] = "candidate";
    // 发起者发送offer
    SOCKET_ON_RTC["OFFER"] = "offer";
    // 接收者发送answer
    SOCKET_ON_RTC["ANSWER"] = "answer";
    // 挂断通话
    SOCKET_ON_RTC["USER_OFF"] = "user_off";
    // 拒绝通话
    SOCKET_ON_RTC["USER_REFUST"] = "user_refust";
})(SOCKET_ON_RTC || (exports.SOCKET_ON_RTC = SOCKET_ON_RTC = {}));
// 系统 on 消息
var SOCKET_ON_SYS;
(function (SOCKET_ON_SYS) {
    // 连接socket
    SOCKET_ON_SYS["CONNECTION"] = "connection";
    // 断开socket
    SOCKET_ON_SYS["DISCONNECT"] = "disconnect";
    // 错误显示
    SOCKET_ON_SYS["SYS_ERROR"] = "sys_error";
})(SOCKET_ON_SYS || (exports.SOCKET_ON_SYS = SOCKET_ON_SYS = {}));
// 用户on消息
var SOCKET_EMIT;
(function (SOCKET_EMIT) {
    SOCKET_EMIT["SYS_USER_LIST"] = "user_list";
})(SOCKET_EMIT || (exports.SOCKET_EMIT = SOCKET_EMIT = {}));
// rtc连接消息类型
var CALL_TYPE;
(function (CALL_TYPE) {
    // 发送者
    CALL_TYPE["SENDER"] = "sender";
    // 接收者
    CALL_TYPE["RECIVER"] = "reciver";
})(CALL_TYPE || (exports.CALL_TYPE = CALL_TYPE = {}));
//# sourceMappingURL=enum.js.map