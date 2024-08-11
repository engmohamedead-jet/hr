import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerElevatorModuleBase } from "./base/customerElevator.module.base";
import { CustomerElevatorService } from "./customerElevator.service";
import { CustomerElevatorController } from "./customerElevator.controller";
import { CustomerElevatorResolver } from "./customerElevator.resolver";

@Module({
  imports: [CustomerElevatorModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerElevatorController],
  providers: [CustomerElevatorService, CustomerElevatorResolver],
  exports: [CustomerElevatorService],
})
export class CustomerElevatorModule {}
