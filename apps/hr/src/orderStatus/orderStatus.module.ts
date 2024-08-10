import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderStatusModuleBase } from "./base/orderStatus.module.base";
import { OrderStatusService } from "./orderStatus.service";
import { OrderStatusController } from "./orderStatus.controller";
import { OrderStatusResolver } from "./orderStatus.resolver";

@Module({
  imports: [OrderStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrderStatusController],
  providers: [OrderStatusService, OrderStatusResolver],
  exports: [OrderStatusService],
})
export class OrderStatusModule {}
