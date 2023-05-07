import {Schema} from "@nestjs/mongoose";

@Schema({
  timestamps: true,
  toJSON: {
    versionKey:false,
  }
})
export class Session{
  _id : string;
}
