import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SaleDetailModuleBase } from "./base/saleDetail.module.base";
import { SaleDetailService } from "./saleDetail.service";
import { SaleDetailController } from "./saleDetail.controller";
import { SaleDetailResolver } from "./saleDetail.resolver";

@Module({
  imports: [SaleDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [SaleDetailController],
  providers: [SaleDetailService, SaleDetailResolver],
  exports: [SaleDetailService],
})
export class SaleDetailModule {}
