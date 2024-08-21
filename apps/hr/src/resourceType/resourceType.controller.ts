import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResourceTypeService } from "./resourceType.service";
import { ResourceTypeControllerBase } from "./base/resourceType.controller.base";

@swagger.ApiTags("resourceTypes")
@common.Controller("resourceTypes")
export class ResourceTypeController extends ResourceTypeControllerBase {
  constructor(
    protected readonly service: ResourceTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
