import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ElevatorModuleBase } from "./base/elevator.module.base";
import { ElevatorService } from "./elevator.service";
import { ElevatorController } from "./elevator.controller";
import { ElevatorResolver } from "./elevator.resolver";

@Module({
  imports: [ElevatorModuleBase, forwardRef(() => AuthModule)],
  controllers: [ElevatorController],
  providers: [ElevatorService, ElevatorResolver],
  exports: [ElevatorService],
})
export class ElevatorModule {}
