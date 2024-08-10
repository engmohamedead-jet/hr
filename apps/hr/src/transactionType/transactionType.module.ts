import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransactionTypeModuleBase } from "./base/transactionType.module.base";
import { TransactionTypeService } from "./transactionType.service";
import { TransactionTypeController } from "./transactionType.controller";
import { TransactionTypeResolver } from "./transactionType.resolver";

@Module({
  imports: [TransactionTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [TransactionTypeController],
  providers: [TransactionTypeService, TransactionTypeResolver],
  exports: [TransactionTypeService],
})
export class TransactionTypeModule {}
