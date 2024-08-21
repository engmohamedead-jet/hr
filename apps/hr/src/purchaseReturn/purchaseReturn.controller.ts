import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PurchaseReturnService } from "./purchaseReturn.service";
import { PurchaseReturnControllerBase } from "./base/purchaseReturn.controller.base";

@swagger.ApiTags("purchaseReturns")
@common.Controller("purchaseReturns")
export class PurchaseReturnController extends PurchaseReturnControllerBase {
  constructor(
    protected readonly service: PurchaseReturnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
