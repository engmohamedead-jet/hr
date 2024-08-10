import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccountTransactionDetailModuleBase } from "./base/accountTransactionDetail.module.base";
import { AccountTransactionDetailService } from "./accountTransactionDetail.service";
import { AccountTransactionDetailController } from "./accountTransactionDetail.controller";
import { AccountTransactionDetailResolver } from "./accountTransactionDetail.resolver";

@Module({
  imports: [AccountTransactionDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccountTransactionDetailController],
  providers: [
    AccountTransactionDetailService,
    AccountTransactionDetailResolver,
  ],
  exports: [AccountTransactionDetailService],
})
export class AccountTransactionDetailModule {}
