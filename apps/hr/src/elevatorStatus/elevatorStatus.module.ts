import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ElevatorStatusModuleBase } from "./base/elevatorStatus.module.base";
import { ElevatorStatusService } from "./elevatorStatus.service";
import { ElevatorStatusController } from "./elevatorStatus.controller";
import { ElevatorStatusResolver } from "./elevatorStatus.resolver";

@Module({
  imports: [ElevatorStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [ElevatorStatusController],
  providers: [ElevatorStatusService, ElevatorStatusResolver],
  exports: [ElevatorStatusService],
})
export class ElevatorStatusModule {}
