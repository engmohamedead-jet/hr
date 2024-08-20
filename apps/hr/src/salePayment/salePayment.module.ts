import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalePaymentModuleBase } from "./base/salePayment.module.base";
import { SalePaymentService } from "./salePayment.service";
import { SalePaymentController } from "./salePayment.controller";
import { SalePaymentResolver } from "./salePayment.resolver";

@Module({
  imports: [SalePaymentModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalePaymentController],
  providers: [SalePaymentService, SalePaymentResolver],
  exports: [SalePaymentService],
})
export class SalePaymentModule {}
