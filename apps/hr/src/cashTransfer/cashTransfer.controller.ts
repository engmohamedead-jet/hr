import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CashTransferService } from "./cashTransfer.service";
import { CashTransferControllerBase } from "./base/cashTransfer.controller.base";

@swagger.ApiTags("cashTransfers")
@common.Controller("cashTransfers")
export class CashTransferController extends CashTransferControllerBase {
  constructor(
    protected readonly service: CashTransferService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
