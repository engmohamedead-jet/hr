import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkCenterTagResolverBase } from "./base/workCenterTag.resolver.base";
import { WorkCenterTag } from "./base/WorkCenterTag";
import { WorkCenterTagService } from "./workCenterTag.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterTag)
export class WorkCenterTagResolver extends WorkCenterTagResolverBase {
  constructor(
    protected readonly service: WorkCenterTagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
