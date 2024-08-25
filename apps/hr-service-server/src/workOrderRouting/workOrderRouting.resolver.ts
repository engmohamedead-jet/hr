import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkOrderRoutingResolverBase } from "./base/workOrderRouting.resolver.base";
import { WorkOrderRouting } from "./base/WorkOrderRouting";
import { WorkOrderRoutingService } from "./workOrderRouting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkOrderRouting)
export class WorkOrderRoutingResolver extends WorkOrderRoutingResolverBase {
  constructor(
    protected readonly service: WorkOrderRoutingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
