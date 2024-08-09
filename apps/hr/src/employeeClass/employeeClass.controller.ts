import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeeClassService } from "./employeeClass.service";
import { EmployeeClassControllerBase } from "./base/employeeClass.controller.base";

@swagger.ApiTags("employeeClasses")
@common.Controller("employeeClasses")
export class EmployeeClassController extends EmployeeClassControllerBase {
  constructor(
    protected readonly service: EmployeeClassService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
