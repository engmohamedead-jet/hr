import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkCenterResolverBase } from "./base/workCenter.resolver.base";
import { WorkCenter } from "./base/WorkCenter";
import { WorkCenterService } from "./workCenter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenter)
export class WorkCenterResolver extends WorkCenterResolverBase {
  constructor(
    protected readonly service: WorkCenterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
