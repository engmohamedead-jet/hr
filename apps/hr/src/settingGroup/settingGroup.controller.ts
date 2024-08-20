import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SettingGroupService } from "./settingGroup.service";
import { SettingGroupControllerBase } from "./base/settingGroup.controller.base";

@swagger.ApiTags("settingGroups")
@common.Controller("settingGroups")
export class SettingGroupController extends SettingGroupControllerBase {
  constructor(
    protected readonly service: SettingGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
