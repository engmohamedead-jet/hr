import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DayOffRequestResolverBase } from "./base/dayOffRequest.resolver.base";
import { DayOffRequest } from "./base/DayOffRequest";
import { DayOffRequestService } from "./dayOffRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DayOffRequest)
export class DayOffRequestResolver extends DayOffRequestResolverBase {
  constructor(
    protected readonly service: DayOffRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
