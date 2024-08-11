import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductGroupService } from "./productGroup.service";
import { ProductGroupControllerBase } from "./base/productGroup.controller.base";

@swagger.ApiTags("productGroups")
@common.Controller("productGroups")
export class ProductGroupController extends ProductGroupControllerBase {
  constructor(
    protected readonly service: ProductGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
