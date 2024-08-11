import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FailureTypeService } from "./failureType.service";
import { FailureTypeControllerBase } from "./base/failureType.controller.base";

@swagger.ApiTags("failureTypes")
@common.Controller("failureTypes")
export class FailureTypeController extends FailureTypeControllerBase {
  constructor(
    protected readonly service: FailureTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
