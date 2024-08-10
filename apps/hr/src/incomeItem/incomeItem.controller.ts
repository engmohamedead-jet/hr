import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IncomeItemService } from "./incomeItem.service";
import { IncomeItemControllerBase } from "./base/incomeItem.controller.base";

@swagger.ApiTags("incomeItems")
@common.Controller("incomeItems")
export class IncomeItemController extends IncomeItemControllerBase {
  constructor(
    protected readonly service: IncomeItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
