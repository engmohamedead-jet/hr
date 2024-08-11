import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DebitService } from "./debit.service";
import { DebitControllerBase } from "./base/debit.controller.base";

@swagger.ApiTags("debits")
@common.Controller("debits")
export class DebitController extends DebitControllerBase {
  constructor(
    protected readonly service: DebitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
