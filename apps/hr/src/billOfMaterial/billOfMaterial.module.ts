import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BillOfMaterialModuleBase } from "./base/billOfMaterial.module.base";
import { BillOfMaterialService } from "./billOfMaterial.service";
import { BillOfMaterialController } from "./billOfMaterial.controller";
import { BillOfMaterialResolver } from "./billOfMaterial.resolver";

@Module({
  imports: [BillOfMaterialModuleBase, forwardRef(() => AuthModule)],
  controllers: [BillOfMaterialController],
  providers: [BillOfMaterialService, BillOfMaterialResolver],
  exports: [BillOfMaterialService],
})
export class BillOfMaterialModule {}
