import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ShippingStatusModuleBase } from "./base/shippingStatus.module.base";
import { ShippingStatusService } from "./shippingStatus.service";
import { ShippingStatusController } from "./shippingStatus.controller";
import { ShippingStatusResolver } from "./shippingStatus.resolver";

@Module({
  imports: [ShippingStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [ShippingStatusController],
  providers: [ShippingStatusService, ShippingStatusResolver],
  exports: [ShippingStatusService],
})
export class ShippingStatusModule {}
