import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalePaymentService } from "./salePayment.service";
import { SalePaymentControllerBase } from "./base/salePayment.controller.base";

@swagger.ApiTags("salePayments")
@common.Controller("salePayments")
export class SalePaymentController extends SalePaymentControllerBase {
  constructor(
    protected readonly service: SalePaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
