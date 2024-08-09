import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeeSalaryDetailService } from "./employeeSalaryDetail.service";
import { EmployeeSalaryDetailControllerBase } from "./base/employeeSalaryDetail.controller.base";

@swagger.ApiTags("employeeSalaryDetails")
@common.Controller("employeeSalaryDetails")
export class EmployeeSalaryDetailController extends EmployeeSalaryDetailControllerBase {
  constructor(
    protected readonly service: EmployeeSalaryDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
