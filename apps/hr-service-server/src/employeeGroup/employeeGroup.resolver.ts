import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmployeeGroupResolverBase } from "./base/employeeGroup.resolver.base";
import { EmployeeGroup } from "./base/EmployeeGroup";
import { EmployeeGroupService } from "./employeeGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmployeeGroup)
export class EmployeeGroupResolver extends EmployeeGroupResolverBase {
  constructor(
    protected readonly service: EmployeeGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
