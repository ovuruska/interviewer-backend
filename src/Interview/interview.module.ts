import {Task, TaskSchema} from "@common/Models/task.model";
import {InterviewController} from "@app/Interview/interview.controller";
import {InterviewService} from "@app/Interview/interview.service";
import {Module} from "@nestjs/common";
import {FirebaseService} from "@common/Services/firebase.service";

@Module({
  controllers:[
    InterviewController
  ],
  imports: [
  ],
  providers: [
    InterviewService,FirebaseService
  ],
  exports: [
  ],
})
export class InterviewModule {}
