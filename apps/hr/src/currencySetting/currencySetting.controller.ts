import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CurrencySettingService } from "./currencySetting.service";
import { CurrencySettingControllerBase } from "./base/currencySetting.controller.base";

@swagger.ApiTags("currencySettings")
@common.Controller("currencySettings")
export class CurrencySettingController extends CurrencySettingControllerBase {
  constructor(
    protected readonly service: CurrencySettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
