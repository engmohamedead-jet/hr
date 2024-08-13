import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrintTemplateContentService } from "./printTemplateContent.service";
import { PrintTemplateContentControllerBase } from "./base/printTemplateContent.controller.base";

@swagger.ApiTags("printTemplateContents")
@common.Controller("printTemplateContents")
export class PrintTemplateContentController extends PrintTemplateContentControllerBase {
  constructor(
    protected readonly service: PrintTemplateContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
