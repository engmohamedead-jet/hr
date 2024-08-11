import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentTypeModuleBase } from "./base/paymentType.module.base";
import { PaymentTypeService } from "./paymentType.service";
import { PaymentTypeController } from "./paymentType.controller";
import { PaymentTypeResolver } from "./paymentType.resolver";

@Module({
  imports: [PaymentTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentTypeController],
  providers: [PaymentTypeService, PaymentTypeResolver],
  exports: [PaymentTypeService],
})
export class PaymentTypeModule {}
