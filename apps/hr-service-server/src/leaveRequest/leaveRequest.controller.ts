import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LeaveRequestService } from "./leaveRequest.service";
import { LeaveRequestControllerBase } from "./base/leaveRequest.controller.base";

@swagger.ApiTags("leaveRequests")
@common.Controller("leaveRequests")
export class LeaveRequestController extends LeaveRequestControllerBase {
  constructor(
    protected readonly service: LeaveRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
