import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CostCenterService } from "./costCenter.service";
import { CostCenterControllerBase } from "./base/costCenter.controller.base";

@swagger.ApiTags("costCenters")
@common.Controller("costCenters")
export class CostCenterController extends CostCenterControllerBase {
  constructor(
    protected readonly service: CostCenterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
