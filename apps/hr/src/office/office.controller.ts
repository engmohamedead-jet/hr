import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OfficeService } from "./office.service";
import { OfficeControllerBase } from "./base/office.controller.base";

@swagger.ApiTags("offices")
@common.Controller("offices")
export class OfficeController extends OfficeControllerBase {
  constructor(
    protected readonly service: OfficeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
