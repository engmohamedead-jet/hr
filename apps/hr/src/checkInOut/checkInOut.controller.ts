import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CheckInOutService } from "./checkInOut.service";
import { CheckInOutControllerBase } from "./base/checkInOut.controller.base";

@swagger.ApiTags("checkInOuts")
@common.Controller("checkInOuts")
export class CheckInOutController extends CheckInOutControllerBase {
  constructor(
    protected readonly service: CheckInOutService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
