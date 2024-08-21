import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SaleQuotationService } from "./saleQuotation.service";
import { SaleQuotationControllerBase } from "./base/saleQuotation.controller.base";

@swagger.ApiTags("saleQuotations")
@common.Controller("saleQuotations")
export class SaleQuotationController extends SaleQuotationControllerBase {
  constructor(
    protected readonly service: SaleQuotationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
