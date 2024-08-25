import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkCenterProductivityResolverBase } from "./base/workCenterProductivity.resolver.base";
import { WorkCenterProductivity } from "./base/WorkCenterProductivity";
import { WorkCenterProductivityService } from "./workCenterProductivity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterProductivity)
export class WorkCenterProductivityResolver extends WorkCenterProductivityResolverBase {
  constructor(
    protected readonly service: WorkCenterProductivityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
