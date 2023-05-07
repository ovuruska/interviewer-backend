"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.WinstonLoggerService = void 0;
var common_1 = require("@nestjs/common");
var winston = require("winston");
var WinstonLoggerService = /** @class */ (function () {
    function WinstonLoggerService() {
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json(), winston.format.colorize({
                all: true
            })),
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(winston.format.timestamp(), winston.format.prettyPrint(), winston.format.align(), winston.format.printf(function (_a) {
                        var level = _a.level, message = _a.message, meta = __rest(_a, ["level", "message"]);
                        return "".concat(meta === null || meta === void 0 ? void 0 : meta['timestamp'], " - ").concat(level, ": ").concat(message);
                    }))
                }),
            ]
        });
    }
    WinstonLoggerService.prototype.log = function (message) {
        var _a;
        var meta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            meta[_i - 1] = arguments[_i];
        }
        (_a = this.logger).info.apply(_a, __spreadArray([message], meta, false));
    };
    WinstonLoggerService.prototype.error = function (message) {
        var _a;
        var meta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            meta[_i - 1] = arguments[_i];
        }
        (_a = this.logger).error.apply(_a, __spreadArray([message], meta, false));
    };
    WinstonLoggerService.prototype.warn = function (message) {
        var _a;
        var meta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            meta[_i - 1] = arguments[_i];
        }
        (_a = this.logger).warn.apply(_a, __spreadArray([message], meta, false));
    };
    WinstonLoggerService.prototype.debug = function (message) {
        var _a;
        var meta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            meta[_i - 1] = arguments[_i];
        }
        (_a = this.logger).debug.apply(_a, __spreadArray([message], meta, false));
    };
    WinstonLoggerService.prototype.verbose = function (message) {
        var _a;
        var meta = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            meta[_i - 1] = arguments[_i];
        }
        (_a = this.logger).verbose.apply(_a, __spreadArray([message], meta, false));
    };
    WinstonLoggerService = __decorate([
        (0, common_1.Injectable)()
    ], WinstonLoggerService);
    return WinstonLoggerService;
}());
exports.WinstonLoggerService = WinstonLoggerService;
