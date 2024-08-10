import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StoreTypeService } from "./storeType.service";
import { StoreTypeControllerBase } from "./base/storeType.controller.base";

@swagger.ApiTags("storeTypes")
@common.Controller("storeTypes")
export class StoreTypeController extends StoreTypeControllerBase {
  constructor(
    protected readonly service: StoreTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
