import { ApiProperty } from '@nestjs/swagger';
import {IsAlphanumeric, IsDefined, IsNotEmpty, Length, Max, Min} from 'class-validator';
import mongoose from 'mongoose';
export class FirebaseIdDto {
  @ApiProperty({
    name: 'id',
    type: 'string',
    description: 'unique identifier',
    required: true,
    example: new mongoose.Types.ObjectId().toString().slice(0, 20),
  })
  @IsDefined()
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(20, 20)
  id: string;
}
