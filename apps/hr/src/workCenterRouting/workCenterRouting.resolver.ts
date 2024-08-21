import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkCenterRoutingResolverBase } from "./base/workCenterRouting.resolver.base";
import { WorkCenterRouting } from "./base/WorkCenterRouting";
import { WorkCenterRoutingService } from "./workCenterRouting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterRouting)
export class WorkCenterRoutingResolver extends WorkCenterRoutingResolverBase {
  constructor(
    protected readonly service: WorkCenterRoutingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
