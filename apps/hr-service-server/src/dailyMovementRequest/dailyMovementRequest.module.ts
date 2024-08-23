import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DailyMovementRequestModuleBase } from "./base/dailyMovementRequest.module.base";
import { DailyMovementRequestService } from "./dailyMovementRequest.service";
import { DailyMovementRequestController } from "./dailyMovementRequest.controller";
import { DailyMovementRequestResolver } from "./dailyMovementRequest.resolver";

@Module({
  imports: [DailyMovementRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [DailyMovementRequestController],
  providers: [DailyMovementRequestService, DailyMovementRequestResolver],
  exports: [DailyMovementRequestService],
})
export class DailyMovementRequestModule {}
