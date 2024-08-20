import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SaleOrderDetailService } from "./saleOrderDetail.service";
import { SaleOrderDetailControllerBase } from "./base/saleOrderDetail.controller.base";

@swagger.ApiTags("saleOrderDetails")
@common.Controller("saleOrderDetails")
export class SaleOrderDetailController extends SaleOrderDetailControllerBase {
  constructor(
    protected readonly service: SaleOrderDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
