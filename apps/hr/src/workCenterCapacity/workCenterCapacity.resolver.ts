import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkCenterCapacityResolverBase } from "./base/workCenterCapacity.resolver.base";
import { WorkCenterCapacity } from "./base/WorkCenterCapacity";
import { WorkCenterCapacityService } from "./workCenterCapacity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterCapacity)
export class WorkCenterCapacityResolver extends WorkCenterCapacityResolverBase {
  constructor(
    protected readonly service: WorkCenterCapacityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
