import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentStatusModuleBase } from "./base/paymentStatus.module.base";
import { PaymentStatusService } from "./paymentStatus.service";
import { PaymentStatusController } from "./paymentStatus.controller";
import { PaymentStatusResolver } from "./paymentStatus.resolver";

@Module({
  imports: [PaymentStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentStatusController],
  providers: [PaymentStatusService, PaymentStatusResolver],
  exports: [PaymentStatusService],
})
export class PaymentStatusModule {}
