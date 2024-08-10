import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountCategoryService } from "./accountCategory.service";
import { AccountCategoryControllerBase } from "./base/accountCategory.controller.base";

@swagger.ApiTags("accountCategories")
@common.Controller("accountCategories")
export class AccountCategoryController extends AccountCategoryControllerBase {
  constructor(
    protected readonly service: AccountCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
