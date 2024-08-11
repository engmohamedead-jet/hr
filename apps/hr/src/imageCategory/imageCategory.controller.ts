import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ImageCategoryService } from "./imageCategory.service";
import { ImageCategoryControllerBase } from "./base/imageCategory.controller.base";

@swagger.ApiTags("imageCategories")
@common.Controller("imageCategories")
export class ImageCategoryController extends ImageCategoryControllerBase {
  constructor(
    protected readonly service: ImageCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
