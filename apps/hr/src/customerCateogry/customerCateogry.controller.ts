import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerCateogryService } from "./customerCateogry.service";
import { CustomerCateogryControllerBase } from "./base/customerCateogry.controller.base";

@swagger.ApiTags("customerCateogries")
@common.Controller("customerCateogries")
export class CustomerCateogryController extends CustomerCateogryControllerBase {
  constructor(
    protected readonly service: CustomerCateogryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
