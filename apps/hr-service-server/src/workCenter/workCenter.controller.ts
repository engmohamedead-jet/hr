import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkCenterService } from "./workCenter.service";
import { WorkCenterControllerBase } from "./base/workCenter.controller.base";

@swagger.ApiTags("workCenters")
@common.Controller("workCenters")
export class WorkCenterController extends WorkCenterControllerBase {
  constructor(
    protected readonly service: WorkCenterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
