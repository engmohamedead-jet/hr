import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BillOfMaterialDetailModuleBase } from "./base/billOfMaterialDetail.module.base";
import { BillOfMaterialDetailService } from "./billOfMaterialDetail.service";
import { BillOfMaterialDetailController } from "./billOfMaterialDetail.controller";
import { BillOfMaterialDetailResolver } from "./billOfMaterialDetail.resolver";

@Module({
  imports: [BillOfMaterialDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [BillOfMaterialDetailController],
  providers: [BillOfMaterialDetailService, BillOfMaterialDetailResolver],
  exports: [BillOfMaterialDetailService],
})
export class BillOfMaterialDetailModule {}
