import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReceiptVoucherService } from "./receiptVoucher.service";
import { ReceiptVoucherControllerBase } from "./base/receiptVoucher.controller.base";

@swagger.ApiTags("receiptVouchers")
@common.Controller("receiptVouchers")
export class ReceiptVoucherController extends ReceiptVoucherControllerBase {
  constructor(
    protected readonly service: ReceiptVoucherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
