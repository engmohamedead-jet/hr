import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkOrderRoutingService } from "./workOrderRouting.service";
import { WorkOrderRoutingControllerBase } from "./base/workOrderRouting.controller.base";

@swagger.ApiTags("workOrderRoutings")
@common.Controller("workOrderRoutings")
export class WorkOrderRoutingController extends WorkOrderRoutingControllerBase {
  constructor(
    protected readonly service: WorkOrderRoutingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
