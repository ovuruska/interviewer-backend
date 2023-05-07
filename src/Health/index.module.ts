import { TerminusModule} from "@nestjs/terminus";
import {HealthController} from "./index.controller";
import {Module} from "@nestjs/common";

@Module({
  imports: [
    TerminusModule.forRoot({}),
    // other imports...
  ],
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
