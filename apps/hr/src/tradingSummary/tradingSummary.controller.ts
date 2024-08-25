import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TradingSummaryService } from "./tradingSummary.service";
import { TradingSummaryControllerBase } from "./base/tradingSummary.controller.base";

@swagger.ApiTags("tradingSummaries")
@common.Controller("tradingSummaries")
export class TradingSummaryController extends TradingSummaryControllerBase {
  constructor(
    protected readonly service: TradingSummaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
