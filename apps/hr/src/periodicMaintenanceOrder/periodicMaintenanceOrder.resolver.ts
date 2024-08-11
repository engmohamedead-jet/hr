import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PeriodicMaintenanceOrderResolverBase } from "./base/periodicMaintenanceOrder.resolver.base";
import { PeriodicMaintenanceOrder } from "./base/PeriodicMaintenanceOrder";
import { PeriodicMaintenanceOrderService } from "./periodicMaintenanceOrder.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PeriodicMaintenanceOrder)
export class PeriodicMaintenanceOrderResolver extends PeriodicMaintenanceOrderResolverBase {
  constructor(
    protected readonly service: PeriodicMaintenanceOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
