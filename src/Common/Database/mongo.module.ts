import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';

import { rootMongooseTestModule } from  '@common/Database/testing.module';

@Global()
@Module({
  imports: [
    process.env.NODE_ENV === 'test'
      ? rootMongooseTestModule()
      : MongooseModule.forRootAsync({
        useFactory: async (configService: ConfigService) => ({
          uri: await configService.get('MONGODB_URL'),
        }),
        inject: [ConfigService],
      }),
  ],
})
export class MongoModule {}
