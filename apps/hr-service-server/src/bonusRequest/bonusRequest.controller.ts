import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BonusRequestService } from "./bonusRequest.service";
import { BonusRequestControllerBase } from "./base/bonusRequest.controller.base";

@swagger.ApiTags("bonusRequests")
@common.Controller("bonusRequests")
export class BonusRequestController extends BonusRequestControllerBase {
  constructor(
    protected readonly service: BonusRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
