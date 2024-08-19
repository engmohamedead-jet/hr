import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PurchasePriceTypeService } from "./purchasePriceType.service";
import { PurchasePriceTypeControllerBase } from "./base/purchasePriceType.controller.base";

@swagger.ApiTags("purchasePriceTypes")
@common.Controller("purchasePriceTypes")
export class PurchasePriceTypeController extends PurchasePriceTypeControllerBase {
  constructor(
    protected readonly service: PurchasePriceTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
