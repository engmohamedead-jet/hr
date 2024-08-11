import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PeriodicMaintenanceOrderService } from "./periodicMaintenanceOrder.service";
import { PeriodicMaintenanceOrderControllerBase } from "./base/periodicMaintenanceOrder.controller.base";

@swagger.ApiTags("periodicMaintenanceOrders")
@common.Controller("periodicMaintenanceOrders")
export class PeriodicMaintenanceOrderController extends PeriodicMaintenanceOrderControllerBase {
  constructor(
    protected readonly service: PeriodicMaintenanceOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
