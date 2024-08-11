import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContractStatusService } from "./contractStatus.service";
import { ContractStatusControllerBase } from "./base/contractStatus.controller.base";

@swagger.ApiTags("contractStatuses")
@common.Controller("contractStatuses")
export class ContractStatusController extends ContractStatusControllerBase {
  constructor(
    protected readonly service: ContractStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
