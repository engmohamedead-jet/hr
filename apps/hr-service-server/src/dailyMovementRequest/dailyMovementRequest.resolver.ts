import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DailyMovementRequestResolverBase } from "./base/dailyMovementRequest.resolver.base";
import { DailyMovementRequest } from "./base/DailyMovementRequest";
import { DailyMovementRequestService } from "./dailyMovementRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DailyMovementRequest)
export class DailyMovementRequestResolver extends DailyMovementRequestResolverBase {
  constructor(
    protected readonly service: DailyMovementRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
