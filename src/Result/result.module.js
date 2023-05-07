"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResultModule = void 0;
var common_1 = require("@nestjs/common");
var result_controller_1 = require("@app/Result/result.controller");
var mongoose_1 = require("@nestjs/mongoose");
var result_prompt_service_1 = require("@app/Result/helpers/result-prompt-service");
var openai_service_1 = require("@common/Services/openai.service");
var result_service_1 = require("@app/Result/result.service");
var result_model_1 = require("@common/Models/result.model");
var Logger_1 = require("@common/Logger");
var ResultModule = /** @class */ (function () {
    function ResultModule() {
    }
    ResultModule = __decorate([
        (0, common_1.Module)({
            controllers: [result_controller_1.ResultController],
            imports: [mongoose_1.MongooseModule.forFeature([
                    { name: "Result", schema: result_model_1.ResultSchema }
                ])],
            providers: [result_prompt_service_1.ResultPromptService, openai_service_1.OpenaiService, result_service_1.ResultService, Logger_1.WinstonLoggerService],
            exports: [result_prompt_service_1.ResultPromptService]
        })
    ], ResultModule);
    return ResultModule;
}());
exports.ResultModule = ResultModule;
