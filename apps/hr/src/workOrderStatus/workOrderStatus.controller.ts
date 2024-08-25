import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkOrderStatusService } from "./workOrderStatus.service";
import { WorkOrderStatusControllerBase } from "./base/workOrderStatus.controller.base";

@swagger.ApiTags("workOrderStatuses")
@common.Controller("workOrderStatuses")
export class WorkOrderStatusController extends WorkOrderStatusControllerBase {
  constructor(
    protected readonly service: WorkOrderStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
