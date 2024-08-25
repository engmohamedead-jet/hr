import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TradingSummaryResolverBase } from "./base/tradingSummary.resolver.base";
import { TradingSummary } from "./base/TradingSummary";
import { TradingSummaryService } from "./tradingSummary.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TradingSummary)
export class TradingSummaryResolver extends TradingSummaryResolverBase {
  constructor(
    protected readonly service: TradingSummaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
