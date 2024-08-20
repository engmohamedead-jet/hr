import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SettingGroupResolverBase } from "./base/settingGroup.resolver.base";
import { SettingGroup } from "./base/SettingGroup";
import { SettingGroupService } from "./settingGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SettingGroup)
export class SettingGroupResolver extends SettingGroupResolverBase {
  constructor(
    protected readonly service: SettingGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
