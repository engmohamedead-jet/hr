import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalePersonService } from "./salePerson.service";
import { SalePersonControllerBase } from "./base/salePerson.controller.base";

@swagger.ApiTags("salePeople")
@common.Controller("salePeople")
export class SalePersonController extends SalePersonControllerBase {
  constructor(
    protected readonly service: SalePersonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
