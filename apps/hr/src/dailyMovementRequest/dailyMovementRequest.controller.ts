import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DailyMovementRequestService } from "./dailyMovementRequest.service";
import { DailyMovementRequestControllerBase } from "./base/dailyMovementRequest.controller.base";

@swagger.ApiTags("dailyMovementRequests")
@common.Controller("dailyMovementRequests")
export class DailyMovementRequestController extends DailyMovementRequestControllerBase {
  constructor(
    protected readonly service: DailyMovementRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
