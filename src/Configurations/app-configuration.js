"use strict";
exports.__esModule = true;
exports.AppConfiguration = void 0;
var index_constants_1 = require("@common/index.constants");
var service_account_json_1 = require("@config/service-account.json");
var AppConfiguration = function () { return ({
    PORT: parseInt(process.env.PORT, 10) || index_constants_1.PORT_DEFAULT,
    MONGODB_URL: process.env.MONGODB_URL || index_constants_1.MONGODB_URL_DEFAULT,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    FIREBASE_SERVICE_ACCOUNT: service_account_json_1["default"]
}); };
exports.AppConfiguration = AppConfiguration;
