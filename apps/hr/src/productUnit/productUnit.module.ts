import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductUnitModuleBase } from "./base/productUnit.module.base";
import { ProductUnitService } from "./productUnit.service";
import { ProductUnitController } from "./productUnit.controller";
import { ProductUnitResolver } from "./productUnit.resolver";

@Module({
  imports: [ProductUnitModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductUnitController],
  providers: [ProductUnitService, ProductUnitResolver],
  exports: [ProductUnitService],
})
export class ProductUnitModule {}
