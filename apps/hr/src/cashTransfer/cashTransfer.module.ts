import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CashTransferModuleBase } from "./base/cashTransfer.module.base";
import { CashTransferService } from "./cashTransfer.service";
import { CashTransferController } from "./cashTransfer.controller";
import { CashTransferResolver } from "./cashTransfer.resolver";

@Module({
  imports: [CashTransferModuleBase, forwardRef(() => AuthModule)],
  controllers: [CashTransferController],
  providers: [CashTransferService, CashTransferResolver],
  exports: [CashTransferService],
})
export class CashTransferModule {}
