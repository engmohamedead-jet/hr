import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployeeSalaryModuleBase } from "./base/employeeSalary.module.base";
import { EmployeeSalaryService } from "./employeeSalary.service";
import { EmployeeSalaryController } from "./employeeSalary.controller";
import { EmployeeSalaryResolver } from "./employeeSalary.resolver";

@Module({
  imports: [EmployeeSalaryModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmployeeSalaryController],
  providers: [EmployeeSalaryService, EmployeeSalaryResolver],
  exports: [EmployeeSalaryService],
})
export class EmployeeSalaryModule {}
