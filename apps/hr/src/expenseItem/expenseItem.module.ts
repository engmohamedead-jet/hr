import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExpenseItemModuleBase } from "./base/expenseItem.module.base";
import { ExpenseItemService } from "./expenseItem.service";
import { ExpenseItemController } from "./expenseItem.controller";
import { ExpenseItemResolver } from "./expenseItem.resolver";

@Module({
  imports: [ExpenseItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExpenseItemController],
  providers: [ExpenseItemService, ExpenseItemResolver],
  exports: [ExpenseItemService],
})
export class ExpenseItemModule {}
