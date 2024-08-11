import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ElevatorStatusService } from "./elevatorStatus.service";
import { ElevatorStatusControllerBase } from "./base/elevatorStatus.controller.base";

@swagger.ApiTags("elevatorStatuses")
@common.Controller("elevatorStatuses")
export class ElevatorStatusController extends ElevatorStatusControllerBase {
  constructor(
    protected readonly service: ElevatorStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
