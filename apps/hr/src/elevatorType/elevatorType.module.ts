import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ElevatorTypeModuleBase } from "./base/elevatorType.module.base";
import { ElevatorTypeService } from "./elevatorType.service";
import { ElevatorTypeController } from "./elevatorType.controller";
import { ElevatorTypeResolver } from "./elevatorType.resolver";

@Module({
  imports: [ElevatorTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ElevatorTypeController],
  providers: [ElevatorTypeService, ElevatorTypeResolver],
  exports: [ElevatorTypeService],
})
export class ElevatorTypeModule {}
