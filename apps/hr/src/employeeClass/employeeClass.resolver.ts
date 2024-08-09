import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmployeeClassResolverBase } from "./base/employeeClass.resolver.base";
import { EmployeeClass } from "./base/EmployeeClass";
import { EmployeeClassService } from "./employeeClass.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmployeeClass)
export class EmployeeClassResolver extends EmployeeClassResolverBase {
  constructor(
    protected readonly service: EmployeeClassService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
