import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InstallmentSaleFeeService } from "./installmentSaleFee.service";
import { InstallmentSaleFeeControllerBase } from "./base/installmentSaleFee.controller.base";

@swagger.ApiTags("installmentSaleFees")
@common.Controller("installmentSaleFees")
export class InstallmentSaleFeeController extends InstallmentSaleFeeControllerBase {
  constructor(
    protected readonly service: InstallmentSaleFeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
