import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FiscalYearService } from "./fiscalYear.service";
import { FiscalYearControllerBase } from "./base/fiscalYear.controller.base";

@swagger.ApiTags("fiscalYears")
@common.Controller("fiscalYears")
export class FiscalYearController extends FiscalYearControllerBase {
  constructor(
    protected readonly service: FiscalYearService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
