import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentTypeService } from "./paymentType.service";
import { PaymentTypeControllerBase } from "./base/paymentType.controller.base";

@swagger.ApiTags("paymentTypes")
@common.Controller("paymentTypes")
export class PaymentTypeController extends PaymentTypeControllerBase {
  constructor(
    protected readonly service: PaymentTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
