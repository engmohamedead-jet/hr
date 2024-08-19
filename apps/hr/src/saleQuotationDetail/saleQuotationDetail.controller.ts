import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SaleQuotationDetailService } from "./saleQuotationDetail.service";
import { SaleQuotationDetailControllerBase } from "./base/saleQuotationDetail.controller.base";

@swagger.ApiTags("saleQuotationDetails")
@common.Controller("saleQuotationDetails")
export class SaleQuotationDetailController extends SaleQuotationDetailControllerBase {
  constructor(
    protected readonly service: SaleQuotationDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
