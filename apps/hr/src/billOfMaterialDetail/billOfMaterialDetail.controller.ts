import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BillOfMaterialDetailService } from "./billOfMaterialDetail.service";
import { BillOfMaterialDetailControllerBase } from "./base/billOfMaterialDetail.controller.base";

@swagger.ApiTags("billOfMaterialDetails")
@common.Controller("billOfMaterialDetails")
export class BillOfMaterialDetailController extends BillOfMaterialDetailControllerBase {
  constructor(
    protected readonly service: BillOfMaterialDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
