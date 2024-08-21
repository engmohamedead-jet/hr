import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalaryItemGroupModuleBase } from "./base/salaryItemGroup.module.base";
import { SalaryItemGroupService } from "./salaryItemGroup.service";
import { SalaryItemGroupController } from "./salaryItemGroup.controller";
import { SalaryItemGroupResolver } from "./salaryItemGroup.resolver";

@Module({
  imports: [SalaryItemGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalaryItemGroupController],
  providers: [SalaryItemGroupService, SalaryItemGroupResolver],
  exports: [SalaryItemGroupService],
})
export class SalaryItemGroupModule {}
