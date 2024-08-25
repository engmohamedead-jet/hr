import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LeaveRequestTypeService } from "./leaveRequestType.service";
import { LeaveRequestTypeControllerBase } from "./base/leaveRequestType.controller.base";

@swagger.ApiTags("leaveRequestTypes")
@common.Controller("leaveRequestTypes")
export class LeaveRequestTypeController extends LeaveRequestTypeControllerBase {
  constructor(
    protected readonly service: LeaveRequestTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
