import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployeeRoleModuleBase } from "./base/employeeRole.module.base";
import { EmployeeRoleService } from "./employeeRole.service";
import { EmployeeRoleController } from "./employeeRole.controller";
import { EmployeeRoleResolver } from "./employeeRole.resolver";

@Module({
  imports: [EmployeeRoleModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmployeeRoleController],
  providers: [EmployeeRoleService, EmployeeRoleResolver],
  exports: [EmployeeRoleService],
})
export class EmployeeRoleModule {}
