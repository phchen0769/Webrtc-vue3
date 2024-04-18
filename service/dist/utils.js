"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$log = exports.toData = void 0;
/**
 * 规定返回数据
 * @param params
 * @returns DataParamsType
 */
function toData(params) {
    if (!params.msg)
        params.msg = "";
    if (!params.data)
        params.data = null;
    return params;
}
exports.toData = toData;
function $log(msg) {
    console.log(`${msg}`);
}
exports.$log = $log;
//# sourceMappingURL=utils.js.map