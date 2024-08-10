import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountTransactionDetailService } from "./accountTransactionDetail.service";
import { AccountTransactionDetailControllerBase } from "./base/accountTransactionDetail.controller.base";

@swagger.ApiTags("accountTransactionDetails")
@common.Controller("accountTransactionDetails")
export class AccountTransactionDetailController extends AccountTransactionDetailControllerBase {
  constructor(
    protected readonly service: AccountTransactionDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
