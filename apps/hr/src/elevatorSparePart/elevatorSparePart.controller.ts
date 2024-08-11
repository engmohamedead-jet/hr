import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ElevatorSparePartService } from "./elevatorSparePart.service";
import { ElevatorSparePartControllerBase } from "./base/elevatorSparePart.controller.base";

@swagger.ApiTags("elevatorSpareParts")
@common.Controller("elevatorSpareParts")
export class ElevatorSparePartController extends ElevatorSparePartControllerBase {
  constructor(
    protected readonly service: ElevatorSparePartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
