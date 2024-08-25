import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkCenterAlternativeService } from "./workCenterAlternative.service";
import { WorkCenterAlternativeControllerBase } from "./base/workCenterAlternative.controller.base";

@swagger.ApiTags("workCenterAlternatives")
@common.Controller("workCenterAlternatives")
export class WorkCenterAlternativeController extends WorkCenterAlternativeControllerBase {
  constructor(
    protected readonly service: WorkCenterAlternativeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
