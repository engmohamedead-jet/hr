import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ElevatorSparePartModuleBase } from "./base/elevatorSparePart.module.base";
import { ElevatorSparePartService } from "./elevatorSparePart.service";
import { ElevatorSparePartController } from "./elevatorSparePart.controller";
import { ElevatorSparePartResolver } from "./elevatorSparePart.resolver";

@Module({
  imports: [ElevatorSparePartModuleBase, forwardRef(() => AuthModule)],
  controllers: [ElevatorSparePartController],
  providers: [ElevatorSparePartService, ElevatorSparePartResolver],
  exports: [ElevatorSparePartService],
})
export class ElevatorSparePartModule {}
