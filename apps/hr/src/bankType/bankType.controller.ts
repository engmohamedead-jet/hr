import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BankTypeService } from "./bankType.service";
import { BankTypeControllerBase } from "./base/bankType.controller.base";

@swagger.ApiTags("bankTypes")
@common.Controller("bankTypes")
export class BankTypeController extends BankTypeControllerBase {
  constructor(
    protected readonly service: BankTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
