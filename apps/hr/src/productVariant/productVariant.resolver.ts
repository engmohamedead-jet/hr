import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProductVariantResolverBase } from "./base/productVariant.resolver.base";
import { ProductVariant } from "./base/ProductVariant";
import { ProductVariantService } from "./productVariant.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductVariant)
export class ProductVariantResolver extends ProductVariantResolverBase {
  constructor(
    protected readonly service: ProductVariantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
