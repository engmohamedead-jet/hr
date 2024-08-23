import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeeRoleService } from "./employeeRole.service";
import { EmployeeRoleControllerBase } from "./base/employeeRole.controller.base";

@swagger.ApiTags("employeeRoles")
@common.Controller("employeeRoles")
export class EmployeeRoleController extends EmployeeRoleControllerBase {
  constructor(
    protected readonly service: EmployeeRoleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
