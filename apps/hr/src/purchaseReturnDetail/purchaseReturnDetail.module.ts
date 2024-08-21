import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PurchaseReturnDetailModuleBase } from "./base/purchaseReturnDetail.module.base";
import { PurchaseReturnDetailService } from "./purchaseReturnDetail.service";
import { PurchaseReturnDetailController } from "./purchaseReturnDetail.controller";
import { PurchaseReturnDetailResolver } from "./purchaseReturnDetail.resolver";

@Module({
  imports: [PurchaseReturnDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [PurchaseReturnDetailController],
  providers: [PurchaseReturnDetailService, PurchaseReturnDetailResolver],
  exports: [PurchaseReturnDetailService],
})
export class PurchaseReturnDetailModule {}
