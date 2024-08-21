import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SaleQuotationDetailModuleBase } from "./base/saleQuotationDetail.module.base";
import { SaleQuotationDetailService } from "./saleQuotationDetail.service";
import { SaleQuotationDetailController } from "./saleQuotationDetail.controller";
import { SaleQuotationDetailResolver } from "./saleQuotationDetail.resolver";

@Module({
  imports: [SaleQuotationDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [SaleQuotationDetailController],
  providers: [SaleQuotationDetailService, SaleQuotationDetailResolver],
  exports: [SaleQuotationDetailService],
})
export class SaleQuotationDetailModule {}
