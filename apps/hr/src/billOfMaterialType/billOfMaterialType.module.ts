import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BillOfMaterialTypeModuleBase } from "./base/billOfMaterialType.module.base";
import { BillOfMaterialTypeService } from "./billOfMaterialType.service";
import { BillOfMaterialTypeController } from "./billOfMaterialType.controller";
import { BillOfMaterialTypeResolver } from "./billOfMaterialType.resolver";

@Module({
  imports: [BillOfMaterialTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [BillOfMaterialTypeController],
  providers: [BillOfMaterialTypeService, BillOfMaterialTypeResolver],
  exports: [BillOfMaterialTypeService],
})
export class BillOfMaterialTypeModule {}
