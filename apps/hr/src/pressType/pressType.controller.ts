import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PressTypeService } from "./pressType.service";
import { PressTypeControllerBase } from "./base/pressType.controller.base";

@swagger.ApiTags("pressTypes")
@common.Controller("pressTypes")
export class PressTypeController extends PressTypeControllerBase {
  constructor(
    protected readonly service: PressTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
