import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalaryItemTypeModuleBase } from "./base/salaryItemType.module.base";
import { SalaryItemTypeService } from "./salaryItemType.service";
import { SalaryItemTypeController } from "./salaryItemType.controller";
import { SalaryItemTypeResolver } from "./salaryItemType.resolver";

@Module({
  imports: [SalaryItemTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalaryItemTypeController],
  providers: [SalaryItemTypeService, SalaryItemTypeResolver],
  exports: [SalaryItemTypeService],
})
export class SalaryItemTypeModule {}
