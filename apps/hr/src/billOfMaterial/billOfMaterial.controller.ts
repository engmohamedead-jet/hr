import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BillOfMaterialService } from "./billOfMaterial.service";
import { BillOfMaterialControllerBase } from "./base/billOfMaterial.controller.base";

@swagger.ApiTags("billOfMaterials")
@common.Controller("billOfMaterials")
export class BillOfMaterialController extends BillOfMaterialControllerBase {
  constructor(
    protected readonly service: BillOfMaterialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
