import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExpenseItemService } from "./expenseItem.service";
import { ExpenseItemControllerBase } from "./base/expenseItem.controller.base";

@swagger.ApiTags("expenseItems")
@common.Controller("expenseItems")
export class ExpenseItemController extends ExpenseItemControllerBase {
  constructor(
    protected readonly service: ExpenseItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
