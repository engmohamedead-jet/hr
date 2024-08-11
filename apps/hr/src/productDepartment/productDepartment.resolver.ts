import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProductDepartmentResolverBase } from "./base/productDepartment.resolver.base";
import { ProductDepartment } from "./base/ProductDepartment";
import { ProductDepartmentService } from "./productDepartment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductDepartment)
export class ProductDepartmentResolver extends ProductDepartmentResolverBase {
  constructor(
    protected readonly service: ProductDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
