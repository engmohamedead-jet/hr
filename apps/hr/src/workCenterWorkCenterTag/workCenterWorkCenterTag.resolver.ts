import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkCenterWorkCenterTagResolverBase } from "./base/workCenterWorkCenterTag.resolver.base";
import { WorkCenterWorkCenterTag } from "./base/WorkCenterWorkCenterTag";
import { WorkCenterWorkCenterTagService } from "./workCenterWorkCenterTag.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterWorkCenterTag)
export class WorkCenterWorkCenterTagResolver extends WorkCenterWorkCenterTagResolverBase {
  constructor(
    protected readonly service: WorkCenterWorkCenterTagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
