import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrintTemplateService } from "./printTemplate.service";
import { PrintTemplateControllerBase } from "./base/printTemplate.controller.base";

@swagger.ApiTags("printTemplates")
@common.Controller("printTemplates")
export class PrintTemplateController extends PrintTemplateControllerBase {
  constructor(
    protected readonly service: PrintTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
