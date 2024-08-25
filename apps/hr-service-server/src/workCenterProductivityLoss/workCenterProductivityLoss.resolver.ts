import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkCenterProductivityLossResolverBase } from "./base/workCenterProductivityLoss.resolver.base";
import { WorkCenterProductivityLoss } from "./base/WorkCenterProductivityLoss";
import { WorkCenterProductivityLossService } from "./workCenterProductivityLoss.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterProductivityLoss)
export class WorkCenterProductivityLossResolver extends WorkCenterProductivityLossResolverBase {
  constructor(
    protected readonly service: WorkCenterProductivityLossService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
