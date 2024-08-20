import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShippingStatusService } from "./shippingStatus.service";
import { ShippingStatusControllerBase } from "./base/shippingStatus.controller.base";

@swagger.ApiTags("shippingStatuses")
@common.Controller("shippingStatuses")
export class ShippingStatusController extends ShippingStatusControllerBase {
  constructor(
    protected readonly service: ShippingStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
