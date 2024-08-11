import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ImageCategoryResolverBase } from "./base/imageCategory.resolver.base";
import { ImageCategory } from "./base/ImageCategory";
import { ImageCategoryService } from "./imageCategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ImageCategory)
export class ImageCategoryResolver extends ImageCategoryResolverBase {
  constructor(
    protected readonly service: ImageCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
