import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExchangeRateDetailService } from "./exchangeRateDetail.service";
import { ExchangeRateDetailControllerBase } from "./base/exchangeRateDetail.controller.base";

@swagger.ApiTags("exchangeRateDetails")
@common.Controller("exchangeRateDetails")
export class ExchangeRateDetailController extends ExchangeRateDetailControllerBase {
  constructor(
    protected readonly service: ExchangeRateDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
