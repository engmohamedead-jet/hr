import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StoreLocationService } from "./storeLocation.service";
import { StoreLocationControllerBase } from "./base/storeLocation.controller.base";

@swagger.ApiTags("storeLocations")
@common.Controller("storeLocations")
export class StoreLocationController extends StoreLocationControllerBase {
  constructor(
    protected readonly service: StoreLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
