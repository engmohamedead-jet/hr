import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentTermModuleBase } from "./base/paymentTerm.module.base";
import { PaymentTermService } from "./paymentTerm.service";
import { PaymentTermController } from "./paymentTerm.controller";
import { PaymentTermResolver } from "./paymentTerm.resolver";

@Module({
  imports: [PaymentTermModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentTermController],
  providers: [PaymentTermService, PaymentTermResolver],
  exports: [PaymentTermService],
})
export class PaymentTermModule {}
