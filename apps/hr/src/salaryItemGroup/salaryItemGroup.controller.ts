import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalaryItemGroupService } from "./salaryItemGroup.service";
import { SalaryItemGroupControllerBase } from "./base/salaryItemGroup.controller.base";

@swagger.ApiTags("salaryItemGroups")
@common.Controller("salaryItemGroups")
export class SalaryItemGroupController extends SalaryItemGroupControllerBase {
  constructor(
    protected readonly service: SalaryItemGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
