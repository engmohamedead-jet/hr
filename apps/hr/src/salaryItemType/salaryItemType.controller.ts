import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalaryItemTypeService } from "./salaryItemType.service";
import { SalaryItemTypeControllerBase } from "./base/salaryItemType.controller.base";

@swagger.ApiTags("salaryItemTypes")
@common.Controller("salaryItemTypes")
export class SalaryItemTypeController extends SalaryItemTypeControllerBase {
  constructor(
    protected readonly service: SalaryItemTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
