import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScrapReasonResolverBase } from "./base/scrapReason.resolver.base";
import { ScrapReason } from "./base/ScrapReason";
import { ScrapReasonService } from "./scrapReason.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScrapReason)
export class ScrapReasonResolver extends ScrapReasonResolverBase {
  constructor(
    protected readonly service: ScrapReasonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
