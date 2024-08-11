import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentStatusService } from "./paymentStatus.service";
import { PaymentStatusControllerBase } from "./base/paymentStatus.controller.base";

@swagger.ApiTags("paymentStatuses")
@common.Controller("paymentStatuses")
export class PaymentStatusController extends PaymentStatusControllerBase {
  constructor(
    protected readonly service: PaymentStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
