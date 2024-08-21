import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SaleReturnDetailResolverBase } from "./base/saleReturnDetail.resolver.base";
import { SaleReturnDetail } from "./base/SaleReturnDetail";
import { SaleReturnDetailService } from "./saleReturnDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SaleReturnDetail)
export class SaleReturnDetailResolver extends SaleReturnDetailResolverBase {
  constructor(
    protected readonly service: SaleReturnDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
