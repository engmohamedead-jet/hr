import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TimeModeService } from "./timeMode.service";
import { TimeModeControllerBase } from "./base/timeMode.controller.base";

@swagger.ApiTags("timeModes")
@common.Controller("timeModes")
export class TimeModeController extends TimeModeControllerBase {
  constructor(
    protected readonly service: TimeModeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
