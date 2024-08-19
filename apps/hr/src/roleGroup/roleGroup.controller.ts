import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RoleGroupService } from "./roleGroup.service";
import { RoleGroupControllerBase } from "./base/roleGroup.controller.base";

@swagger.ApiTags("roleGroups")
@common.Controller("roleGroups")
export class RoleGroupController extends RoleGroupControllerBase {
  constructor(
    protected readonly service: RoleGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
