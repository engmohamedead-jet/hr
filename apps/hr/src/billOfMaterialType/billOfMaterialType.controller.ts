import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BillOfMaterialTypeService } from "./billOfMaterialType.service";
import { BillOfMaterialTypeControllerBase } from "./base/billOfMaterialType.controller.base";

@swagger.ApiTags("billOfMaterialTypes")
@common.Controller("billOfMaterialTypes")
export class BillOfMaterialTypeController extends BillOfMaterialTypeControllerBase {
  constructor(
    protected readonly service: BillOfMaterialTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
