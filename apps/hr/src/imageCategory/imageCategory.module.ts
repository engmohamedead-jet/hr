import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ImageCategoryModuleBase } from "./base/imageCategory.module.base";
import { ImageCategoryService } from "./imageCategory.service";
import { ImageCategoryController } from "./imageCategory.controller";
import { ImageCategoryResolver } from "./imageCategory.resolver";

@Module({
  imports: [ImageCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [ImageCategoryController],
  providers: [ImageCategoryService, ImageCategoryResolver],
  exports: [ImageCategoryService],
})
export class ImageCategoryModule {}
