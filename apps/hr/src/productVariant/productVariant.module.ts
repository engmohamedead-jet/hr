import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductVariantModuleBase } from "./base/productVariant.module.base";
import { ProductVariantService } from "./productVariant.service";
import { ProductVariantController } from "./productVariant.controller";
import { ProductVariantResolver } from "./productVariant.resolver";

@Module({
  imports: [ProductVariantModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductVariantController],
  providers: [ProductVariantService, ProductVariantResolver],
  exports: [ProductVariantService],
})
export class ProductVariantModule {}
