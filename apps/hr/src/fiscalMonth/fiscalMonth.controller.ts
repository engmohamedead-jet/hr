import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FiscalMonthService } from "./fiscalMonth.service";
import { FiscalMonthControllerBase } from "./base/fiscalMonth.controller.base";

@swagger.ApiTags("fiscalMonths")
@common.Controller("fiscalMonths")
export class FiscalMonthController extends FiscalMonthControllerBase {
  constructor(
    protected readonly service: FiscalMonthService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
