import {BadRequestException, Injectable} from "@nestjs/common";
import {FirebaseService} from "@common/Services/firebase.service";
import {InterviewDto} from "@common/Dto/interview";
import {TaskEnum} from "@common/index.enum";
import {TaskDto} from "@common/Dto/task";

@Injectable()
export class InterviewService {

  constructor(
    private readonly firebaseService: FirebaseService,
  ) {
  }

  async createInterview(email: string) : Promise<InterviewDto>{
    const interview = {
      email,
      isCompleted: false,
      steps: []
    }
    // Check if email already exists
    const interviewRef = await this.firebaseService.firestore().collection('interview').where('email', '==', email).get()
    if (interviewRef.docs.length > 0) {
      // Throw Bad Request
      throw new BadRequestException('Interview already exists');
    }
    // Create interview
    const interviewDoc = await this.firebaseService.firestore().collection('interview').add(interview);

    return await interviewDoc.get().then(doc => {
      return {
        id: doc.id,
        ...doc.data()
      } as InterviewDto;
    });
  }

  async addStep(id : string ,type: TaskEnum) : Promise<TaskDto> {
    // Get random task of type from firestore
    const taskRef = await this.firebaseService.firestore().collection('task').where('type', '==', type).get();
    const task = taskRef.docs[Math.floor(Math.random() * taskRef.docs.length)];
    // Get task Id and add it to interview
    const interviewRef = await this.firebaseService.firestore().collection('interview').doc(id).get();
    const interview = interviewRef.data();
    interview.steps.push({
      id: task.id,
    });

    await this.firebaseService.firestore().collection('interview').doc(id).update(interview);
    return task.data() as TaskDto;
  }


}
