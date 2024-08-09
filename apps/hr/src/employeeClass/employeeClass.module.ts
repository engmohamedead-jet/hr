import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployeeClassModuleBase } from "./base/employeeClass.module.base";
import { EmployeeClassService } from "./employeeClass.service";
import { EmployeeClassController } from "./employeeClass.controller";
import { EmployeeClassResolver } from "./employeeClass.resolver";

@Module({
  imports: [EmployeeClassModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmployeeClassController],
  providers: [EmployeeClassService, EmployeeClassResolver],
  exports: [EmployeeClassService],
})
export class EmployeeClassModule {}
