import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SaleDetailService } from "./saleDetail.service";
import { SaleDetailControllerBase } from "./base/saleDetail.controller.base";

@swagger.ApiTags("saleDetails")
@common.Controller("saleDetails")
export class SaleDetailController extends SaleDetailControllerBase {
  constructor(
    protected readonly service: SaleDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
