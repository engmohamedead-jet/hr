import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SaleOrderDetailModuleBase } from "./base/saleOrderDetail.module.base";
import { SaleOrderDetailService } from "./saleOrderDetail.service";
import { SaleOrderDetailController } from "./saleOrderDetail.controller";
import { SaleOrderDetailResolver } from "./saleOrderDetail.resolver";

@Module({
  imports: [SaleOrderDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [SaleOrderDetailController],
  providers: [SaleOrderDetailService, SaleOrderDetailResolver],
  exports: [SaleOrderDetailService],
})
export class SaleOrderDetailModule {}
