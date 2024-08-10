import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalePriceTypeService } from "./salePriceType.service";
import { SalePriceTypeControllerBase } from "./base/salePriceType.controller.base";

@swagger.ApiTags("salePriceTypes")
@common.Controller("salePriceTypes")
export class SalePriceTypeController extends SalePriceTypeControllerBase {
  constructor(
    protected readonly service: SalePriceTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
