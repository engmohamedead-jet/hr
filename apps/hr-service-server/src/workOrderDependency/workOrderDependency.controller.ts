import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkOrderDependencyService } from "./workOrderDependency.service";
import { WorkOrderDependencyControllerBase } from "./base/workOrderDependency.controller.base";

@swagger.ApiTags("workOrderDependencies")
@common.Controller("workOrderDependencies")
export class WorkOrderDependencyController extends WorkOrderDependencyControllerBase {
  constructor(
    protected readonly service: WorkOrderDependencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
