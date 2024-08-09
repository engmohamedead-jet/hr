import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalaryItemResolverBase } from "./base/salaryItem.resolver.base";
import { SalaryItem } from "./base/SalaryItem";
import { SalaryItemService } from "./salaryItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalaryItem)
export class SalaryItemResolver extends SalaryItemResolverBase {
  constructor(
    protected readonly service: SalaryItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
