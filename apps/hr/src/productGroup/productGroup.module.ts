import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductGroupModuleBase } from "./base/productGroup.module.base";
import { ProductGroupService } from "./productGroup.service";
import { ProductGroupController } from "./productGroup.controller";
import { ProductGroupResolver } from "./productGroup.resolver";

@Module({
  imports: [ProductGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductGroupController],
  providers: [ProductGroupService, ProductGroupResolver],
  exports: [ProductGroupService],
})
export class ProductGroupModule {}
