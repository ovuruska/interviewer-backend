import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

import { MongoIdDto } from './mongo-id';
import mongoose from "mongoose";

describe('DTO- UpdateBrandDto', () => {
  const payload = {
    id: new mongoose.Types.ObjectId(),
  };

  it('should pass', async () => {
    const object = plainToClass(MongoIdDto, payload);
    let error, result;
    try {
      result = await validate(object);
    } catch (error_) {
      error = error_;
    } finally {
      expect(error).toBeUndefined();
      expect(result).toBeDefined();
    }
  });

  describe('id', () => {
    it('should throw an error if id is undefined', async () => {
      const object = plainToClass(MongoIdDto, {});
      let error, result: ValidationError[];

      try {
        result = await validate(object);
      } catch (error_) {
        error = error_;
      } finally {
        expect(error).toBeUndefined();
        expect(result[0].constraints.isNotEmpty).toEqual('id should not be empty');
        expect(result[0].constraints.isMongoId).toEqual('id must be a mongodb id');
      }
    });

    it('should throw an error if id is not a mongoId', async () => {
      const object = plainToClass(MongoIdDto, {
        id: 'test',
      });
      let error, result: ValidationError[];

      try {
        result = await validate(object);
      } catch (error_) {
        error = error_;
      } finally {
        expect(error).toBeUndefined();
        expect(result[0].constraints.isMongoId).toEqual('id must be a mongodb id');
        expect(result[0].constraints.isNotEmpty).toBeUndefined();
      }
    });
  });
});
