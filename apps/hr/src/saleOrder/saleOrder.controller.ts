import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SaleOrderService } from "./saleOrder.service";
import { SaleOrderControllerBase } from "./base/saleOrder.controller.base";

@swagger.ApiTags("saleOrders")
@common.Controller("saleOrders")
export class SaleOrderController extends SaleOrderControllerBase {
  constructor(
    protected readonly service: SaleOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
