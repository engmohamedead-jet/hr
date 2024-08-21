import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TimeoffTypeService } from "./timeoffType.service";
import { TimeoffTypeControllerBase } from "./base/timeoffType.controller.base";

@swagger.ApiTags("timeoffTypes")
@common.Controller("timeoffTypes")
export class TimeoffTypeController extends TimeoffTypeControllerBase {
  constructor(
    protected readonly service: TimeoffTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
