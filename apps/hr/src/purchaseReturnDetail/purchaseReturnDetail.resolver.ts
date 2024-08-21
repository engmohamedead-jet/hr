import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PurchaseReturnDetailResolverBase } from "./base/purchaseReturnDetail.resolver.base";
import { PurchaseReturnDetail } from "./base/PurchaseReturnDetail";
import { PurchaseReturnDetailService } from "./purchaseReturnDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PurchaseReturnDetail)
export class PurchaseReturnDetailResolver extends PurchaseReturnDetailResolverBase {
  constructor(
    protected readonly service: PurchaseReturnDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
