import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InstallationContractService } from "./installationContract.service";
import { InstallationContractControllerBase } from "./base/installationContract.controller.base";

@swagger.ApiTags("installationContracts")
@common.Controller("installationContracts")
export class InstallationContractController extends InstallationContractControllerBase {
  constructor(
    protected readonly service: InstallationContractService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
