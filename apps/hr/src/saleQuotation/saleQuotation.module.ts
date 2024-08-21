import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SaleQuotationModuleBase } from "./base/saleQuotation.module.base";
import { SaleQuotationService } from "./saleQuotation.service";
import { SaleQuotationController } from "./saleQuotation.controller";
import { SaleQuotationResolver } from "./saleQuotation.resolver";

@Module({
  imports: [SaleQuotationModuleBase, forwardRef(() => AuthModule)],
  controllers: [SaleQuotationController],
  providers: [SaleQuotationService, SaleQuotationResolver],
  exports: [SaleQuotationService],
})
export class SaleQuotationModule {}
