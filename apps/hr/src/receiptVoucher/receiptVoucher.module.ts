import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReceiptVoucherModuleBase } from "./base/receiptVoucher.module.base";
import { ReceiptVoucherService } from "./receiptVoucher.service";
import { ReceiptVoucherController } from "./receiptVoucher.controller";
import { ReceiptVoucherResolver } from "./receiptVoucher.resolver";

@Module({
  imports: [ReceiptVoucherModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReceiptVoucherController],
  providers: [ReceiptVoucherService, ReceiptVoucherResolver],
  exports: [ReceiptVoucherService],
})
export class ReceiptVoucherModule {}
