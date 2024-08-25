import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmployeeRoleResolverBase } from "./base/employeeRole.resolver.base";
import { EmployeeRole } from "./base/EmployeeRole";
import { EmployeeRoleService } from "./employeeRole.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmployeeRole)
export class EmployeeRoleResolver extends EmployeeRoleResolverBase {
  constructor(
    protected readonly service: EmployeeRoleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
