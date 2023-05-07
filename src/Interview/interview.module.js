"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InterviewModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var task_model_1 = require("@common/Models/task.model");
var InterviewModule = /** @class */ (function () {
    function InterviewModule() {
    }
    InterviewModule = __decorate([
        (0, common_1.Module)({
            controllers: [],
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    {
                        name: task_model_1.Task.name,
                        schema: task_model_1.TaskSchema
                    }
                ])
            ],
            exports: []
        })
    ], InterviewModule);
    return InterviewModule;
}());
exports.InterviewModule = InterviewModule;
