import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BankService } from "./bank.service";
import { BankControllerBase } from "./base/bank.controller.base";

@swagger.ApiTags("banks")
@common.Controller("banks")
export class BankController extends BankControllerBase {
  constructor(
    protected readonly service: BankService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
