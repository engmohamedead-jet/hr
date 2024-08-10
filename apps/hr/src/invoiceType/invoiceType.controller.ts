import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InvoiceTypeService } from "./invoiceType.service";
import { InvoiceTypeControllerBase } from "./base/invoiceType.controller.base";

@swagger.ApiTags("invoiceTypes")
@common.Controller("invoiceTypes")
export class InvoiceTypeController extends InvoiceTypeControllerBase {
  constructor(
    protected readonly service: InvoiceTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
