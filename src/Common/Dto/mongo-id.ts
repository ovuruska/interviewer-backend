import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';
export class MongoIdDto {
  @ApiProperty({
    name: 'id',
    type: 'string',
    description: 'unique identifier',
    required: true,
    example: new mongoose.Types.ObjectId(),
  })
  @IsDefined()
  @IsNotEmpty()
  @IsMongoId()
  id: string;
}
