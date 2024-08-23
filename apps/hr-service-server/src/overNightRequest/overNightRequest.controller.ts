import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OverNightRequestService } from "./overNightRequest.service";
import { OverNightRequestControllerBase } from "./base/overNightRequest.controller.base";

@swagger.ApiTags("overNightRequests")
@common.Controller("overNightRequests")
export class OverNightRequestController extends OverNightRequestControllerBase {
  constructor(
    protected readonly service: OverNightRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
