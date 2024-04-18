"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
// 客户端管理类
class Clients {
    data;
    constructor(initArray) {
        this.data = initArray || [];
    }
    add(user) {
        if (!user || !user.username)
            return;
        if (this.data.some(v => v.username === user.username)) {
            return false;
        }
        this.data.push(user);
        console.log(this.data, user);
        (0, utils_1.$log)(`---${user.username}---(连接)`);
        return true;
    }
    remove(username) {
        this.data = this.data.filter(c => username !== c.username);
    }
    get(username) {
        return this.data.find(c => c.username === username);
    }
}
exports.default = Clients;
//# sourceMappingURL=clients.js.map