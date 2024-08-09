import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmployeeClassSalaryItemValueResolverBase } from "./base/employeeClassSalaryItemValue.resolver.base";
import { EmployeeClassSalaryItemValue } from "./base/EmployeeClassSalaryItemValue";
import { EmployeeClassSalaryItemValueService } from "./employeeClassSalaryItemValue.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmployeeClassSalaryItemValue)
export class EmployeeClassSalaryItemValueResolver extends EmployeeClassSalaryItemValueResolverBase {
  constructor(
    protected readonly service: EmployeeClassSalaryItemValueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
