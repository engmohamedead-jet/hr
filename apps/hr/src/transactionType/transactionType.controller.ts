import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransactionTypeService } from "./transactionType.service";
import { TransactionTypeControllerBase } from "./base/transactionType.controller.base";

@swagger.ApiTags("transactionTypes")
@common.Controller("transactionTypes")
export class TransactionTypeController extends TransactionTypeControllerBase {
  constructor(
    protected readonly service: TransactionTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
