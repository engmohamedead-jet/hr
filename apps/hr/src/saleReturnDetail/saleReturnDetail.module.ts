import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SaleReturnDetailModuleBase } from "./base/saleReturnDetail.module.base";
import { SaleReturnDetailService } from "./saleReturnDetail.service";
import { SaleReturnDetailController } from "./saleReturnDetail.controller";
import { SaleReturnDetailResolver } from "./saleReturnDetail.resolver";

@Module({
  imports: [SaleReturnDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [SaleReturnDetailController],
  providers: [SaleReturnDetailService, SaleReturnDetailResolver],
  exports: [SaleReturnDetailService],
})
export class SaleReturnDetailModule {}
