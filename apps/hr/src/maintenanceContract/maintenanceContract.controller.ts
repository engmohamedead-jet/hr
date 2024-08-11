import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MaintenanceContractService } from "./maintenanceContract.service";
import { MaintenanceContractControllerBase } from "./base/maintenanceContract.controller.base";

@swagger.ApiTags("maintenanceContracts")
@common.Controller("maintenanceContracts")
export class MaintenanceContractController extends MaintenanceContractControllerBase {
  constructor(
    protected readonly service: MaintenanceContractService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
