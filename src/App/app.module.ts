import {Module} from '@nestjs/common';
import {HealthModule} from "../Health/index.module";
import {ConfigModule} from "@nestjs/config";
import {MongoModule} from "@common/Database/mongo.module";
import {AppConfiguration} from "@app/Configurations/app-configuration";
import {ResultModule} from "@app/Result/result.module";
import {WinstonLoggerService} from "@common/Logger";
import {InterviewModule} from "@app/Interview/interview.module";
import {FirebaseService} from "@common/Services/firebase.service";

@Module({
  imports: [ ConfigModule.forRoot({
    load: [AppConfiguration], isGlobal: true,
  }), MongoModule,HealthModule,ResultModule,InterviewModule], controllers: [], providers: [FirebaseService,WinstonLoggerService],
})
export class AppModule {
}
