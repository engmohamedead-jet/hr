import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HrSpecialistResolverBase } from "./base/hrSpecialist.resolver.base";
import { HrSpecialist } from "./base/HrSpecialist";
import { HrSpecialistService } from "./hrSpecialist.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HrSpecialist)
export class HrSpecialistResolver extends HrSpecialistResolverBase {
  constructor(
    protected readonly service: HrSpecialistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
