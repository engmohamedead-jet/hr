import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployeeGroupModuleBase } from "./base/employeeGroup.module.base";
import { EmployeeGroupService } from "./employeeGroup.service";
import { EmployeeGroupController } from "./employeeGroup.controller";
import { EmployeeGroupResolver } from "./employeeGroup.resolver";

@Module({
  imports: [EmployeeGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmployeeGroupController],
  providers: [EmployeeGroupService, EmployeeGroupResolver],
  exports: [EmployeeGroupService],
})
export class EmployeeGroupModule {}
