import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkOrderDependencyResolverBase } from "./base/workOrderDependency.resolver.base";
import { WorkOrderDependency } from "./base/WorkOrderDependency";
import { WorkOrderDependencyService } from "./workOrderDependency.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkOrderDependency)
export class WorkOrderDependencyResolver extends WorkOrderDependencyResolverBase {
  constructor(
    protected readonly service: WorkOrderDependencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
