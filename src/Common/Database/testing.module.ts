import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryReplSet } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongod: MongoMemoryReplSet;

export const rootMongooseTestModule = (options: MongooseModuleOptions = {}) =>
  MongooseModule.forRootAsync({
    useFactory: async () => {
      mongod = await MongoMemoryReplSet.create({ replSet: { count: 3 } });
      const mongoUri = mongod.getUri();
      return {
        uri: mongoUri,
        ...options,
      };
    },
  });

export const closeInMongodConnection = async () => {
  await mongoose.disconnect();
  await mongod.stop();
};
