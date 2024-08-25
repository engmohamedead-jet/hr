import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkCenterProductivityLossService } from "./workCenterProductivityLoss.service";
import { WorkCenterProductivityLossControllerBase } from "./base/workCenterProductivityLoss.controller.base";

@swagger.ApiTags("workCenterProductivityLosses")
@common.Controller("workCenterProductivityLosses")
export class WorkCenterProductivityLossController extends WorkCenterProductivityLossControllerBase {
  constructor(
    protected readonly service: WorkCenterProductivityLossService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
