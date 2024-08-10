import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccountCategoryResolverBase } from "./base/accountCategory.resolver.base";
import { AccountCategory } from "./base/AccountCategory";
import { AccountCategoryService } from "./accountCategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccountCategory)
export class AccountCategoryResolver extends AccountCategoryResolverBase {
  constructor(
    protected readonly service: AccountCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
