import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PurchaseDetailResolverBase } from "./base/purchaseDetail.resolver.base";
import { PurchaseDetail } from "./base/PurchaseDetail";
import { PurchaseDetailService } from "./purchaseDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PurchaseDetail)
export class PurchaseDetailResolver extends PurchaseDetailResolverBase {
  constructor(
    protected readonly service: PurchaseDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
