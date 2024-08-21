import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SaleOrderModuleBase } from "./base/saleOrder.module.base";
import { SaleOrderService } from "./saleOrder.service";
import { SaleOrderController } from "./saleOrder.controller";
import { SaleOrderResolver } from "./saleOrder.resolver";

@Module({
  imports: [SaleOrderModuleBase, forwardRef(() => AuthModule)],
  controllers: [SaleOrderController],
  providers: [SaleOrderService, SaleOrderResolver],
  exports: [SaleOrderService],
})
export class SaleOrderModule {}
