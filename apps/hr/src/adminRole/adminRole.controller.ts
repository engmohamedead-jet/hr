import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdminRoleService } from "./adminRole.service";
import { AdminRoleControllerBase } from "./base/adminRole.controller.base";

@swagger.ApiTags("adminRoles")
@common.Controller("adminRoles")
export class AdminRoleController extends AdminRoleControllerBase {
  constructor(
    protected readonly service: AdminRoleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
