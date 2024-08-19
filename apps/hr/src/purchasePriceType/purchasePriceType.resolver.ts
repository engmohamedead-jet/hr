import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PurchasePriceTypeResolverBase } from "./base/purchasePriceType.resolver.base";
import { PurchasePriceType } from "./base/PurchasePriceType";
import { PurchasePriceTypeService } from "./purchasePriceType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PurchasePriceType)
export class PurchasePriceTypeResolver extends PurchasePriceTypeResolverBase {
  constructor(
    protected readonly service: PurchasePriceTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
