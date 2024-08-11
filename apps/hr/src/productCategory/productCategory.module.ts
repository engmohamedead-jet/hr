import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductCategoryModuleBase } from "./base/productCategory.module.base";
import { ProductCategoryService } from "./productCategory.service";
import { ProductCategoryController } from "./productCategory.controller";
import { ProductCategoryResolver } from "./productCategory.resolver";

@Module({
  imports: [ProductCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService, ProductCategoryResolver],
  exports: [ProductCategoryService],
})
export class ProductCategoryModule {}
