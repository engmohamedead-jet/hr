import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FiscalWeekService } from "./fiscalWeek.service";
import { FiscalWeekControllerBase } from "./base/fiscalWeek.controller.base";

@swagger.ApiTags("fiscalWeeks")
@common.Controller("fiscalWeeks")
export class FiscalWeekController extends FiscalWeekControllerBase {
  constructor(
    protected readonly service: FiscalWeekService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
