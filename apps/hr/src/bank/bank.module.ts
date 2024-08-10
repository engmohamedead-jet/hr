import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BankModuleBase } from "./base/bank.module.base";
import { BankService } from "./bank.service";
import { BankController } from "./bank.controller";
import { BankResolver } from "./bank.resolver";

@Module({
  imports: [BankModuleBase, forwardRef(() => AuthModule)],
  controllers: [BankController],
  providers: [BankService, BankResolver],
  exports: [BankService],
})
export class BankModule {}
