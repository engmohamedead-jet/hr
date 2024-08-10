import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CashRepositoryService } from "./cashRepository.service";
import { CashRepositoryControllerBase } from "./base/cashRepository.controller.base";

@swagger.ApiTags("cashRepositories")
@common.Controller("cashRepositories")
export class CashRepositoryController extends CashRepositoryControllerBase {
  constructor(
    protected readonly service: CashRepositoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
