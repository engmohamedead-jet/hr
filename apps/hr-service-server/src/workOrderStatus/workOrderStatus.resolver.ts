import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkOrderStatusResolverBase } from "./base/workOrderStatus.resolver.base";
import { WorkOrderStatus } from "./base/WorkOrderStatus";
import { WorkOrderStatusService } from "./workOrderStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkOrderStatus)
export class WorkOrderStatusResolver extends WorkOrderStatusResolverBase {
  constructor(
    protected readonly service: WorkOrderStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
