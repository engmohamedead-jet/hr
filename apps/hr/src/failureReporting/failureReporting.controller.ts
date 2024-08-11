import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FailureReportingService } from "./failureReporting.service";
import { FailureReportingControllerBase } from "./base/failureReporting.controller.base";

@swagger.ApiTags("failureReportings")
@common.Controller("failureReportings")
export class FailureReportingController extends FailureReportingControllerBase {
  constructor(
    protected readonly service: FailureReportingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
