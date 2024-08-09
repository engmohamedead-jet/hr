import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalaryItemService } from "./salaryItem.service";
import { SalaryItemControllerBase } from "./base/salaryItem.controller.base";

@swagger.ApiTags("salaryItems")
@common.Controller("salaryItems")
export class SalaryItemController extends SalaryItemControllerBase {
  constructor(
    protected readonly service: SalaryItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
