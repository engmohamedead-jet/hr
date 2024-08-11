import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DoorTypeService } from "./doorType.service";
import { DoorTypeControllerBase } from "./base/doorType.controller.base";

@swagger.ApiTags("doorTypes")
@common.Controller("doorTypes")
export class DoorTypeController extends DoorTypeControllerBase {
  constructor(
    protected readonly service: DoorTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
