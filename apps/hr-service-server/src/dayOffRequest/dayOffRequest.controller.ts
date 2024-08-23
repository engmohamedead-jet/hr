import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DayOffRequestService } from "./dayOffRequest.service";
import { DayOffRequestControllerBase } from "./base/dayOffRequest.controller.base";

@swagger.ApiTags("dayOffRequests")
@common.Controller("dayOffRequests")
export class DayOffRequestController extends DayOffRequestControllerBase {
  constructor(
    protected readonly service: DayOffRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
