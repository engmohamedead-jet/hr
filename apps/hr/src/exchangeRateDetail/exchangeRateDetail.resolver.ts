import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExchangeRateDetailResolverBase } from "./base/exchangeRateDetail.resolver.base";
import { ExchangeRateDetail } from "./base/ExchangeRateDetail";
import { ExchangeRateDetailService } from "./exchangeRateDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExchangeRateDetail)
export class ExchangeRateDetailResolver extends ExchangeRateDetailResolverBase {
  constructor(
    protected readonly service: ExchangeRateDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
