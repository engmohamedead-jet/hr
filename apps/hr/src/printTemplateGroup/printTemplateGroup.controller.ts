import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrintTemplateGroupService } from "./printTemplateGroup.service";
import { PrintTemplateGroupControllerBase } from "./base/printTemplateGroup.controller.base";

@swagger.ApiTags("printTemplateGroups")
@common.Controller("printTemplateGroups")
export class PrintTemplateGroupController extends PrintTemplateGroupControllerBase {
  constructor(
    protected readonly service: PrintTemplateGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
