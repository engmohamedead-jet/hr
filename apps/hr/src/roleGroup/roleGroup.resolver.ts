import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RoleGroupResolverBase } from "./base/roleGroup.resolver.base";
import { RoleGroup } from "./base/RoleGroup";
import { RoleGroupService } from "./roleGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RoleGroup)
export class RoleGroupResolver extends RoleGroupResolverBase {
  constructor(
    protected readonly service: RoleGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
