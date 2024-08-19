import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductUnitService } from "./productUnit.service";
import { ProductUnitControllerBase } from "./base/productUnit.controller.base";

@swagger.ApiTags("productUnits")
@common.Controller("productUnits")
export class ProductUnitController extends ProductUnitControllerBase {
  constructor(
    protected readonly service: ProductUnitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
