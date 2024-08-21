import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkCenterRoutingService } from "./workCenterRouting.service";
import { WorkCenterRoutingControllerBase } from "./base/workCenterRouting.controller.base";

@swagger.ApiTags("workCenterRoutings")
@common.Controller("workCenterRoutings")
export class WorkCenterRoutingController extends WorkCenterRoutingControllerBase {
  constructor(
    protected readonly service: WorkCenterRoutingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
