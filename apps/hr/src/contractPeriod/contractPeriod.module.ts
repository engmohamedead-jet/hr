import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContractPeriodModuleBase } from "./base/contractPeriod.module.base";
import { ContractPeriodService } from "./contractPeriod.service";
import { ContractPeriodController } from "./contractPeriod.controller";
import { ContractPeriodResolver } from "./contractPeriod.resolver";

@Module({
  imports: [ContractPeriodModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContractPeriodController],
  providers: [ContractPeriodService, ContractPeriodResolver],
  exports: [ContractPeriodService],
})
export class ContractPeriodModule {}
