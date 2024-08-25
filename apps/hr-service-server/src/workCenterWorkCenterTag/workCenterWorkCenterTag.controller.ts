import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkCenterWorkCenterTagService } from "./workCenterWorkCenterTag.service";
import { WorkCenterWorkCenterTagControllerBase } from "./base/workCenterWorkCenterTag.controller.base";

@swagger.ApiTags("workCenterWorkCenterTags")
@common.Controller("workCenterWorkCenterTags")
export class WorkCenterWorkCenterTagController extends WorkCenterWorkCenterTagControllerBase {
  constructor(
    protected readonly service: WorkCenterWorkCenterTagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
