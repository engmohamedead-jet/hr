import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BarcodeTypeModuleBase } from "./base/barcodeType.module.base";
import { BarcodeTypeService } from "./barcodeType.service";
import { BarcodeTypeController } from "./barcodeType.controller";
import { BarcodeTypeResolver } from "./barcodeType.resolver";

@Module({
  imports: [BarcodeTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [BarcodeTypeController],
  providers: [BarcodeTypeService, BarcodeTypeResolver],
  exports: [BarcodeTypeService],
})
export class BarcodeTypeModule {}
