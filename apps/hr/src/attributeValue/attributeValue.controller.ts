import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AttributeValueService } from "./attributeValue.service";
import { AttributeValueControllerBase } from "./base/attributeValue.controller.base";

@swagger.ApiTags("attributeValues")
@common.Controller("attributeValues")
export class AttributeValueController extends AttributeValueControllerBase {
  constructor(
    protected readonly service: AttributeValueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
