import mongoose from "mongoose";
import {FirebaseIdDto} from "@common/Dto/firebase-id";
import {plainToClass} from "class-transformer";
import {validateSync} from "class-validator";

describe('DTO- FirebaseIdDto', () => {
  it('should be exactly 20 characters', () => {
    const data = {
      id: new mongoose.Types.ObjectId().toString().slice(0, 20),
    }
    const dto = plainToClass(FirebaseIdDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toEqual(0);
  });
  it('should not include other characters than alphanumeric characters', () => {
    const data = {
      id: new mongoose.Types.ObjectId().toString().slice(0, 19) + '!',
    };
    const dto = plainToClass(FirebaseIdDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
  it('should not be less than 20 characters', () => {
    const data = {
      id: new mongoose.Types.ObjectId().toString().slice(0, 19),
    };
    const dto = plainToClass(FirebaseIdDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
  it('should not be more than 20 characters', () => {
    const data = {
      id: new mongoose.Types.ObjectId().toString().slice(0, 21),
    };
    const dto = plainToClass(FirebaseIdDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
  it('should not be empty', () => {
    const data = {
      id: '',
    };
    const dto = plainToClass(FirebaseIdDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
});
