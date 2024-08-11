import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MotorTypeService } from "./motorType.service";
import { MotorTypeControllerBase } from "./base/motorType.controller.base";

@swagger.ApiTags("motorTypes")
@common.Controller("motorTypes")
export class MotorTypeController extends MotorTypeControllerBase {
  constructor(
    protected readonly service: MotorTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
