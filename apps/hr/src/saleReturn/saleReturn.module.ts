import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SaleReturnModuleBase } from "./base/saleReturn.module.base";
import { SaleReturnService } from "./saleReturn.service";
import { SaleReturnController } from "./saleReturn.controller";
import { SaleReturnResolver } from "./saleReturn.resolver";

@Module({
  imports: [SaleReturnModuleBase, forwardRef(() => AuthModule)],
  controllers: [SaleReturnController],
  providers: [SaleReturnService, SaleReturnResolver],
  exports: [SaleReturnService],
})
export class SaleReturnModule {}
