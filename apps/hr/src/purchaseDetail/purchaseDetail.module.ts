import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PurchaseDetailModuleBase } from "./base/purchaseDetail.module.base";
import { PurchaseDetailService } from "./purchaseDetail.service";
import { PurchaseDetailController } from "./purchaseDetail.controller";
import { PurchaseDetailResolver } from "./purchaseDetail.resolver";

@Module({
  imports: [PurchaseDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [PurchaseDetailController],
  providers: [PurchaseDetailService, PurchaseDetailResolver],
  exports: [PurchaseDetailService],
})
export class PurchaseDetailModule {}
