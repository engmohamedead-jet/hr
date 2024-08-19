import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PurchasePriceTypeModuleBase } from "./base/purchasePriceType.module.base";
import { PurchasePriceTypeService } from "./purchasePriceType.service";
import { PurchasePriceTypeController } from "./purchasePriceType.controller";
import { PurchasePriceTypeResolver } from "./purchasePriceType.resolver";

@Module({
  imports: [PurchasePriceTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [PurchasePriceTypeController],
  providers: [PurchasePriceTypeService, PurchasePriceTypeResolver],
  exports: [PurchasePriceTypeService],
})
export class PurchasePriceTypeModule {}
