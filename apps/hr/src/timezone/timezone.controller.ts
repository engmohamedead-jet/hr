import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TimezoneService } from "./timezone.service";
import { TimezoneControllerBase } from "./base/timezone.controller.base";

@swagger.ApiTags("timezones")
@common.Controller("timezones")
export class TimezoneController extends TimezoneControllerBase {
  constructor(
    protected readonly service: TimezoneService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
