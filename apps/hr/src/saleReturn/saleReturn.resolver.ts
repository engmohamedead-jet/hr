import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SaleReturnResolverBase } from "./base/saleReturn.resolver.base";
import { SaleReturn } from "./base/SaleReturn";
import { SaleReturnService } from "./saleReturn.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SaleReturn)
export class SaleReturnResolver extends SaleReturnResolverBase {
  constructor(
    protected readonly service: SaleReturnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
