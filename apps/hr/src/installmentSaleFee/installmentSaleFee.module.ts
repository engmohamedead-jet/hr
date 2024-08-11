import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InstallmentSaleFeeModuleBase } from "./base/installmentSaleFee.module.base";
import { InstallmentSaleFeeService } from "./installmentSaleFee.service";
import { InstallmentSaleFeeController } from "./installmentSaleFee.controller";
import { InstallmentSaleFeeResolver } from "./installmentSaleFee.resolver";

@Module({
  imports: [InstallmentSaleFeeModuleBase, forwardRef(() => AuthModule)],
  controllers: [InstallmentSaleFeeController],
  providers: [InstallmentSaleFeeService, InstallmentSaleFeeResolver],
  exports: [InstallmentSaleFeeService],
})
export class InstallmentSaleFeeModule {}
