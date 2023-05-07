import {Prop, SchemaFactory,Schema} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";
import {TaskEnum} from "@common/index.enum";

@Schema({
  timestamps: true,
  toJSON: {
    versionKey:false,
  }
})
export class Task {
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
    type: TaskEnum, required: true,
  }) type: TaskEnum;

}

export type TaskDocument = HydratedDocument<Task>;

export const TaskSchema = SchemaFactory.createForClass(Task);

