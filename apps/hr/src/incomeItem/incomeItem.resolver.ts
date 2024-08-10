import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IncomeItemResolverBase } from "./base/incomeItem.resolver.base";
import { IncomeItem } from "./base/IncomeItem";
import { IncomeItemService } from "./incomeItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IncomeItem)
export class IncomeItemResolver extends IncomeItemResolverBase {
  constructor(
    protected readonly service: IncomeItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
