import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PurchaseReturnResolverBase } from "./base/purchaseReturn.resolver.base";
import { PurchaseReturn } from "./base/PurchaseReturn";
import { PurchaseReturnService } from "./purchaseReturn.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PurchaseReturn)
export class PurchaseReturnResolver extends PurchaseReturnResolverBase {
  constructor(
    protected readonly service: PurchaseReturnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
