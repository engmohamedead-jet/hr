import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CurrencySettingResolverBase } from "./base/currencySetting.resolver.base";
import { CurrencySetting } from "./base/CurrencySetting";
import { CurrencySettingService } from "./currencySetting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CurrencySetting)
export class CurrencySettingResolver extends CurrencySettingResolverBase {
  constructor(
    protected readonly service: CurrencySettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
