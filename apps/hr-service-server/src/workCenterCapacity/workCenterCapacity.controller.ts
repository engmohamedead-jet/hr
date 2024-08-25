import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkCenterCapacityService } from "./workCenterCapacity.service";
import { WorkCenterCapacityControllerBase } from "./base/workCenterCapacity.controller.base";

@swagger.ApiTags("workCenterCapacities")
@common.Controller("workCenterCapacities")
export class WorkCenterCapacityController extends WorkCenterCapacityControllerBase {
  constructor(
    protected readonly service: WorkCenterCapacityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
