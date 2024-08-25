import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkCenterAlternativeResolverBase } from "./base/workCenterAlternative.resolver.base";
import { WorkCenterAlternative } from "./base/WorkCenterAlternative";
import { WorkCenterAlternativeService } from "./workCenterAlternative.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterAlternative)
export class WorkCenterAlternativeResolver extends WorkCenterAlternativeResolverBase {
  constructor(
    protected readonly service: WorkCenterAlternativeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
