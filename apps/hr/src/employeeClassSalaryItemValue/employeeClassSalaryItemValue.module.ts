import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployeeClassSalaryItemValueModuleBase } from "./base/employeeClassSalaryItemValue.module.base";
import { EmployeeClassSalaryItemValueService } from "./employeeClassSalaryItemValue.service";
import { EmployeeClassSalaryItemValueController } from "./employeeClassSalaryItemValue.controller";
import { EmployeeClassSalaryItemValueResolver } from "./employeeClassSalaryItemValue.resolver";

@Module({
  imports: [
    EmployeeClassSalaryItemValueModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [EmployeeClassSalaryItemValueController],
  providers: [
    EmployeeClassSalaryItemValueService,
    EmployeeClassSalaryItemValueResolver,
  ],
  exports: [EmployeeClassSalaryItemValueService],
})
export class EmployeeClassSalaryItemValueModule {}
