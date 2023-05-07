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
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

@Schema({
  timestamps: true, toJSON: {
    versionKey: false,
  }
})
export class Result {

  _id: string;

  @Prop({
    type: String, required: true,
  }) feedback: string;

  @Prop({
    type: Number, required: true,
  })
  quality: number;

  @Prop({
    type: Number, required: true,
  })
  performance: number;

  @Prop({
    type: Number, required: true,
  })
  validation: number;

  @Prop({
    type: String
  }) createdAt: string;

  @Prop({
    type: String
  }) modifiedAt: string;


}

export type ResultDocument = HydratedDocument<Result>;
export const ResultSchema = SchemaFactory.createForClass(Result);
