import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContractPeriodService } from "./contractPeriod.service";
import { ContractPeriodControllerBase } from "./base/contractPeriod.controller.base";

@swagger.ApiTags("contractPeriods")
@common.Controller("contractPeriods")
export class ContractPeriodController extends ContractPeriodControllerBase {
  constructor(
    protected readonly service: ContractPeriodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
