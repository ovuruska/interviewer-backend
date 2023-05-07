"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskSchema = exports.Task = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var index_enum_1 = require("@common/index.enum");
var Task = /** @class */ (function () {
    function Task() {
    }
    __decorate([
        (0, mongoose_1.Prop)({
            type: String, required: true
        })
    ], Task.prototype, "description");
    __decorate([
        (0, mongoose_1.Prop)({
            type: String, required: true
        })
    ], Task.prototype, "title");
    __decorate([
        (0, mongoose_1.Prop)({
            type: String
        })
    ], Task.prototype, "content");
    __decorate([
        (0, mongoose_1.Prop)({
            type: index_enum_1.TaskEnum, required: true
        })
    ], Task.prototype, "type");
    Task = __decorate([
        (0, mongoose_1.Schema)({
            timestamps: true,
            toJSON: {
                versionKey: false
            }
        })
    ], Task);
    return Task;
}());
exports.Task = Task;
exports.TaskSchema = mongoose_1.SchemaFactory.createForClass(Task);
