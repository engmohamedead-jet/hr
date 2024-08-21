import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmployeeDepartmentResolverBase } from "./base/employeeDepartment.resolver.base";
import { EmployeeDepartment } from "./base/EmployeeDepartment";
import { EmployeeDepartmentService } from "./employeeDepartment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmployeeDepartment)
export class EmployeeDepartmentResolver extends EmployeeDepartmentResolverBase {
  constructor(
    protected readonly service: EmployeeDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
