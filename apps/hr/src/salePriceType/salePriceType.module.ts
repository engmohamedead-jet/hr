import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalePriceTypeModuleBase } from "./base/salePriceType.module.base";
import { SalePriceTypeService } from "./salePriceType.service";
import { SalePriceTypeController } from "./salePriceType.controller";
import { SalePriceTypeResolver } from "./salePriceType.resolver";

@Module({
  imports: [SalePriceTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalePriceTypeController],
  providers: [SalePriceTypeService, SalePriceTypeResolver],
  exports: [SalePriceTypeService],
})
export class SalePriceTypeModule {}
