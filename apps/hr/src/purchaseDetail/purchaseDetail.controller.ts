import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PurchaseDetailService } from "./purchaseDetail.service";
import { PurchaseDetailControllerBase } from "./base/purchaseDetail.controller.base";

@swagger.ApiTags("purchaseDetails")
@common.Controller("purchaseDetails")
export class PurchaseDetailController extends PurchaseDetailControllerBase {
  constructor(
    protected readonly service: PurchaseDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
