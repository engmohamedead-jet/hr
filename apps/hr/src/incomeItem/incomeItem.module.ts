import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IncomeItemModuleBase } from "./base/incomeItem.module.base";
import { IncomeItemService } from "./incomeItem.service";
import { IncomeItemController } from "./incomeItem.controller";
import { IncomeItemResolver } from "./incomeItem.resolver";

@Module({
  imports: [IncomeItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [IncomeItemController],
  providers: [IncomeItemService, IncomeItemResolver],
  exports: [IncomeItemService],
})
export class IncomeItemModule {}
