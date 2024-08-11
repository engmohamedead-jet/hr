import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BarcodeTypeService } from "./barcodeType.service";
import { BarcodeTypeControllerBase } from "./base/barcodeType.controller.base";

@swagger.ApiTags("barcodeTypes")
@common.Controller("barcodeTypes")
export class BarcodeTypeController extends BarcodeTypeControllerBase {
  constructor(
    protected readonly service: BarcodeTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
