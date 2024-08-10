import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccountTransactionModuleBase } from "./base/accountTransaction.module.base";
import { AccountTransactionService } from "./accountTransaction.service";
import { AccountTransactionController } from "./accountTransaction.controller";
import { AccountTransactionResolver } from "./accountTransaction.resolver";

@Module({
  imports: [AccountTransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccountTransactionController],
  providers: [AccountTransactionService, AccountTransactionResolver],
  exports: [AccountTransactionService],
})
export class AccountTransactionModule {}
