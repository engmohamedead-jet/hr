import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SaleOrderDetailResolverBase } from "./base/saleOrderDetail.resolver.base";
import { SaleOrderDetail } from "./base/SaleOrderDetail";
import { SaleOrderDetailService } from "./saleOrderDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SaleOrderDetail)
export class SaleOrderDetailResolver extends SaleOrderDetailResolverBase {
  constructor(
    protected readonly service: SaleOrderDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
