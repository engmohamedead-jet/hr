import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LeaveRequestTypeResolverBase } from "./base/leaveRequestType.resolver.base";
import { LeaveRequestType } from "./base/LeaveRequestType";
import { LeaveRequestTypeService } from "./leaveRequestType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LeaveRequestType)
export class LeaveRequestTypeResolver extends LeaveRequestTypeResolverBase {
  constructor(
    protected readonly service: LeaveRequestTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
