import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ElevatorService } from "./elevator.service";
import { ElevatorControllerBase } from "./base/elevator.controller.base";

@swagger.ApiTags("elevators")
@common.Controller("elevators")
export class ElevatorController extends ElevatorControllerBase {
  constructor(
    protected readonly service: ElevatorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
