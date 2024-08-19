import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SaleReturnDetailService } from "./saleReturnDetail.service";
import { SaleReturnDetailControllerBase } from "./base/saleReturnDetail.controller.base";

@swagger.ApiTags("saleReturnDetails")
@common.Controller("saleReturnDetails")
export class SaleReturnDetailController extends SaleReturnDetailControllerBase {
  constructor(
    protected readonly service: SaleReturnDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
