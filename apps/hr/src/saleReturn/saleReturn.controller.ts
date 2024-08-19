import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SaleReturnService } from "./saleReturn.service";
import { SaleReturnControllerBase } from "./base/saleReturn.controller.base";

@swagger.ApiTags("saleReturns")
@common.Controller("saleReturns")
export class SaleReturnController extends SaleReturnControllerBase {
  constructor(
    protected readonly service: SaleReturnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
