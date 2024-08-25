import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkCenterProductivityService } from "./workCenterProductivity.service";
import { WorkCenterProductivityControllerBase } from "./base/workCenterProductivity.controller.base";

@swagger.ApiTags("workCenterProductivities")
@common.Controller("workCenterProductivities")
export class WorkCenterProductivityController extends WorkCenterProductivityControllerBase {
  constructor(
    protected readonly service: WorkCenterProductivityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
