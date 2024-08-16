import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductBarcodeModuleBase } from "./base/productBarcode.module.base";
import { ProductBarcodeService } from "./productBarcode.service";
import { ProductBarcodeController } from "./productBarcode.controller";
import { ProductBarcodeResolver } from "./productBarcode.resolver";

@Module({
  imports: [ProductBarcodeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductBarcodeController],
  providers: [ProductBarcodeService, ProductBarcodeResolver],
  exports: [ProductBarcodeService],
})
export class ProductBarcodeModule {}
