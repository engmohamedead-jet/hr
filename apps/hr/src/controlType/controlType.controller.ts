import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ControlTypeService } from "./controlType.service";
import { ControlTypeControllerBase } from "./base/controlType.controller.base";

@swagger.ApiTags("controlTypes")
@common.Controller("controlTypes")
export class ControlTypeController extends ControlTypeControllerBase {
  constructor(
    protected readonly service: ControlTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
