import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SaleTeamService } from "./saleTeam.service";
import { SaleTeamControllerBase } from "./base/saleTeam.controller.base";

@swagger.ApiTags("saleTeams")
@common.Controller("saleTeams")
export class SaleTeamController extends SaleTeamControllerBase {
  constructor(
    protected readonly service: SaleTeamService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
