import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PurchaseReturnDetailService } from "./purchaseReturnDetail.service";
import { PurchaseReturnDetailControllerBase } from "./base/purchaseReturnDetail.controller.base";

@swagger.ApiTags("purchaseReturnDetails")
@common.Controller("purchaseReturnDetails")
export class PurchaseReturnDetailController extends PurchaseReturnDetailControllerBase {
  constructor(
    protected readonly service: PurchaseReturnDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
