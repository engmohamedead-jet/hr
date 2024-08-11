import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerElevatorService } from "./customerElevator.service";
import { CustomerElevatorControllerBase } from "./base/customerElevator.controller.base";

@swagger.ApiTags("customerElevators")
@common.Controller("customerElevators")
export class CustomerElevatorController extends CustomerElevatorControllerBase {
  constructor(
    protected readonly service: CustomerElevatorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
