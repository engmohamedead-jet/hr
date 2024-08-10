import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExpenseItemResolverBase } from "./base/expenseItem.resolver.base";
import { ExpenseItem } from "./base/ExpenseItem";
import { ExpenseItemService } from "./expenseItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExpenseItem)
export class ExpenseItemResolver extends ExpenseItemResolverBase {
  constructor(
    protected readonly service: ExpenseItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
