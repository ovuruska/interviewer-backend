"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResultSchema = exports.Result = void 0;
/*
import {Prop, SchemaFactory,Schema} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";
import {InterviewTaskEnum} from "@common/index.enum";

@Schema({
  timestamps: true,
  toJSON: {
    versionKey:false,
  }
})
export class InterviewTask {
  _id: string;

  @Prop({
    type: String, required: true,
  }) description: string;

  @Prop({
    type: String, required: true,
  }) title: string;

  @Prop({
    type: String,
  }) content: string;
  createdAt: string;

  @Prop({
    type: InterviewTaskEnum, required: true,
  }) type: InterviewTaskEnum;

}

export type InterviewTaskDocument = HydratedDocument<InterviewTask>;

export const InterviewTaskSchema = SchemaFactory.createForClass(InterviewTask);


 */
var mongoose_1 = require("@nestjs/mongoose");
var Result = /** @class */ (function () {
    function Result() {
    }
    __decorate([
        (0, mongoose_1.Prop)({
            type: String, required: true
        })
    ], Result.prototype, "feedback");
    __decorate([
        (0, mongoose_1.Prop)({
            type: Number, required: true
        })
    ], Result.prototype, "quality");
    __decorate([
        (0, mongoose_1.Prop)({
            type: Number, required: true
        })
    ], Result.prototype, "performance");
    __decorate([
        (0, mongoose_1.Prop)({
            type: Number, required: true
        })
    ], Result.prototype, "validation");
    __decorate([
        (0, mongoose_1.Prop)({
            type: String
        })
    ], Result.prototype, "createdAt");
    __decorate([
        (0, mongoose_1.Prop)({
            type: String
        })
    ], Result.prototype, "modifiedAt");
    Result = __decorate([
        (0, mongoose_1.Schema)({
            timestamps: true, toJSON: {
                versionKey: false
            }
        })
    ], Result);
    return Result;
}());
exports.Result = Result;
exports.ResultSchema = mongoose_1.SchemaFactory.createForClass(Result);
