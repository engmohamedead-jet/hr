import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmployeeSalaryDetailResolverBase } from "./base/employeeSalaryDetail.resolver.base";
import { EmployeeSalaryDetail } from "./base/EmployeeSalaryDetail";
import { EmployeeSalaryDetailService } from "./employeeSalaryDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmployeeSalaryDetail)
export class EmployeeSalaryDetailResolver extends EmployeeSalaryDetailResolverBase {
  constructor(
    protected readonly service: EmployeeSalaryDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
