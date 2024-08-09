import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeeClassSalaryItemValueService } from "./employeeClassSalaryItemValue.service";
import { EmployeeClassSalaryItemValueControllerBase } from "./base/employeeClassSalaryItemValue.controller.base";

@swagger.ApiTags("employeeClassSalaryItemValues")
@common.Controller("employeeClassSalaryItemValues")
export class EmployeeClassSalaryItemValueController extends EmployeeClassSalaryItemValueControllerBase {
  constructor(
    protected readonly service: EmployeeClassSalaryItemValueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
