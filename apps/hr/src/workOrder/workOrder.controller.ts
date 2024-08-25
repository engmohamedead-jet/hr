import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkOrderService } from "./workOrder.service";
import { WorkOrderControllerBase } from "./base/workOrder.controller.base";

@swagger.ApiTags("workOrders")
@common.Controller("workOrders")
export class WorkOrderController extends WorkOrderControllerBase {
  constructor(
    protected readonly service: WorkOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
