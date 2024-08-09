import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployeeSalaryDetailModuleBase } from "./base/employeeSalaryDetail.module.base";
import { EmployeeSalaryDetailService } from "./employeeSalaryDetail.service";
import { EmployeeSalaryDetailController } from "./employeeSalaryDetail.controller";
import { EmployeeSalaryDetailResolver } from "./employeeSalaryDetail.resolver";

@Module({
  imports: [EmployeeSalaryDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmployeeSalaryDetailController],
  providers: [EmployeeSalaryDetailService, EmployeeSalaryDetailResolver],
  exports: [EmployeeSalaryDetailService],
})
export class EmployeeSalaryDetailModule {}
