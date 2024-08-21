import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalaryItemGroupResolverBase } from "./base/salaryItemGroup.resolver.base";
import { SalaryItemGroup } from "./base/SalaryItemGroup";
import { SalaryItemGroupService } from "./salaryItemGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalaryItemGroup)
export class SalaryItemGroupResolver extends SalaryItemGroupResolverBase {
  constructor(
    protected readonly service: SalaryItemGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
