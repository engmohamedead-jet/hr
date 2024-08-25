import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkCenterProductivityLossTypeResolverBase } from "./base/workCenterProductivityLossType.resolver.base";
import { WorkCenterProductivityLossType } from "./base/WorkCenterProductivityLossType";
import { WorkCenterProductivityLossTypeService } from "./workCenterProductivityLossType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkCenterProductivityLossType)
export class WorkCenterProductivityLossTypeResolver extends WorkCenterProductivityLossTypeResolverBase {
  constructor(
    protected readonly service: WorkCenterProductivityLossTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
