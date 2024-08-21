import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalaryLawModuleBase } from "./base/salaryLaw.module.base";
import { SalaryLawService } from "./salaryLaw.service";
import { SalaryLawController } from "./salaryLaw.controller";
import { SalaryLawResolver } from "./salaryLaw.resolver";

@Module({
  imports: [SalaryLawModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalaryLawController],
  providers: [SalaryLawService, SalaryLawResolver],
  exports: [SalaryLawService],
})
export class SalaryLawModule {}
