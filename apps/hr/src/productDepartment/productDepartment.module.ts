import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductDepartmentModuleBase } from "./base/productDepartment.module.base";
import { ProductDepartmentService } from "./productDepartment.service";
import { ProductDepartmentController } from "./productDepartment.controller";
import { ProductDepartmentResolver } from "./productDepartment.resolver";

@Module({
  imports: [ProductDepartmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductDepartmentController],
  providers: [ProductDepartmentService, ProductDepartmentResolver],
  exports: [ProductDepartmentService],
})
export class ProductDepartmentModule {}
