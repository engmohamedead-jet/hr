import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkSheetTypeService } from "./workSheetType.service";
import { WorkSheetTypeControllerBase } from "./base/workSheetType.controller.base";

@swagger.ApiTags("workSheetTypes")
@common.Controller("workSheetTypes")
export class WorkSheetTypeController extends WorkSheetTypeControllerBase {
  constructor(
    protected readonly service: WorkSheetTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
