import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkCenterTagService } from "./workCenterTag.service";
import { WorkCenterTagControllerBase } from "./base/workCenterTag.controller.base";

@swagger.ApiTags("workCenterTags")
@common.Controller("workCenterTags")
export class WorkCenterTagController extends WorkCenterTagControllerBase {
  constructor(
    protected readonly service: WorkCenterTagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
