import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductionAvailabilityService } from "./productionAvailability.service";
import { ProductionAvailabilityControllerBase } from "./base/productionAvailability.controller.base";

@swagger.ApiTags("productionAvailabilities")
@common.Controller("productionAvailabilities")
export class ProductionAvailabilityController extends ProductionAvailabilityControllerBase {
  constructor(
    protected readonly service: ProductionAvailabilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
