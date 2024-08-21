import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScrapReasonService } from "./scrapReason.service";
import { ScrapReasonControllerBase } from "./base/scrapReason.controller.base";

@swagger.ApiTags("scrapReasons")
@common.Controller("scrapReasons")
export class ScrapReasonController extends ScrapReasonControllerBase {
  constructor(
    protected readonly service: ScrapReasonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
