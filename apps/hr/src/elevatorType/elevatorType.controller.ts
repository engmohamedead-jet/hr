import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ElevatorTypeService } from "./elevatorType.service";
import { ElevatorTypeControllerBase } from "./base/elevatorType.controller.base";

@swagger.ApiTags("elevatorTypes")
@common.Controller("elevatorTypes")
export class ElevatorTypeController extends ElevatorTypeControllerBase {
  constructor(
    protected readonly service: ElevatorTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
