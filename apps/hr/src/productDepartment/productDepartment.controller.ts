import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductDepartmentService } from "./productDepartment.service";
import { ProductDepartmentControllerBase } from "./base/productDepartment.controller.base";

@swagger.ApiTags("productDepartments")
@common.Controller("productDepartments")
export class ProductDepartmentController extends ProductDepartmentControllerBase {
  constructor(
    protected readonly service: ProductDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
