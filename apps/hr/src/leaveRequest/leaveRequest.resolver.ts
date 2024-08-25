import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LeaveRequestResolverBase } from "./base/leaveRequest.resolver.base";
import { LeaveRequest } from "./base/LeaveRequest";
import { LeaveRequestService } from "./leaveRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LeaveRequest)
export class LeaveRequestResolver extends LeaveRequestResolverBase {
  constructor(
    protected readonly service: LeaveRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
