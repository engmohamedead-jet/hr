import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkCenterProductivityLossTypeService } from "./workCenterProductivityLossType.service";
import { WorkCenterProductivityLossTypeControllerBase } from "./base/workCenterProductivityLossType.controller.base";

@swagger.ApiTags("workCenterProductivityLossTypes")
@common.Controller("workCenterProductivityLossTypes")
export class WorkCenterProductivityLossTypeController extends WorkCenterProductivityLossTypeControllerBase {
  constructor(
    protected readonly service: WorkCenterProductivityLossTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
