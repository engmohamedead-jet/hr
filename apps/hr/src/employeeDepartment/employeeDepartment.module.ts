import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployeeDepartmentModuleBase } from "./base/employeeDepartment.module.base";
import { EmployeeDepartmentService } from "./employeeDepartment.service";
import { EmployeeDepartmentController } from "./employeeDepartment.controller";
import { EmployeeDepartmentResolver } from "./employeeDepartment.resolver";

@Module({
  imports: [EmployeeDepartmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmployeeDepartmentController],
  providers: [EmployeeDepartmentService, EmployeeDepartmentResolver],
  exports: [EmployeeDepartmentService],
})
export class EmployeeDepartmentModule {}
