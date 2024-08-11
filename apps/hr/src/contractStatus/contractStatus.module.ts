import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContractStatusModuleBase } from "./base/contractStatus.module.base";
import { ContractStatusService } from "./contractStatus.service";
import { ContractStatusController } from "./contractStatus.controller";
import { ContractStatusResolver } from "./contractStatus.resolver";

@Module({
  imports: [ContractStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContractStatusController],
  providers: [ContractStatusService, ContractStatusResolver],
  exports: [ContractStatusService],
})
export class ContractStatusModule {}
