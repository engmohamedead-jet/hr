import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PurchaseReturnModuleBase } from "./base/purchaseReturn.module.base";
import { PurchaseReturnService } from "./purchaseReturn.service";
import { PurchaseReturnController } from "./purchaseReturn.controller";
import { PurchaseReturnResolver } from "./purchaseReturn.resolver";

@Module({
  imports: [PurchaseReturnModuleBase, forwardRef(() => AuthModule)],
  controllers: [PurchaseReturnController],
  providers: [PurchaseReturnService, PurchaseReturnResolver],
  exports: [PurchaseReturnService],
})
export class PurchaseReturnModule {}
