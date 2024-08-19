import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeeDepartmentService } from "./employeeDepartment.service";
import { EmployeeDepartmentControllerBase } from "./base/employeeDepartment.controller.base";

@swagger.ApiTags("employeeDepartments")
@common.Controller("employeeDepartments")
export class EmployeeDepartmentController extends EmployeeDepartmentControllerBase {
  constructor(
    protected readonly service: EmployeeDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
