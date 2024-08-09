import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalaryItemModuleBase } from "./base/salaryItem.module.base";
import { SalaryItemService } from "./salaryItem.service";
import { SalaryItemController } from "./salaryItem.controller";
import { SalaryItemResolver } from "./salaryItem.resolver";

@Module({
  imports: [SalaryItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalaryItemController],
  providers: [SalaryItemService, SalaryItemResolver],
  exports: [SalaryItemService],
})
export class SalaryItemModule {}
