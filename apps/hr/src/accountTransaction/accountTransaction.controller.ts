import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountTransactionService } from "./accountTransaction.service";
import { AccountTransactionControllerBase } from "./base/accountTransaction.controller.base";

@swagger.ApiTags("accountTransactions")
@common.Controller("accountTransactions")
export class AccountTransactionController extends AccountTransactionControllerBase {
  constructor(
    protected readonly service: AccountTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
