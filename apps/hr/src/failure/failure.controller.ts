import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FailureService } from "./failure.service";
import { FailureControllerBase } from "./base/failure.controller.base";

@swagger.ApiTags("failures")
@common.Controller("failures")
export class FailureController extends FailureControllerBase {
  constructor(
    protected readonly service: FailureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
