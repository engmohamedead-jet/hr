import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FiscalWeekResolverBase } from "./base/fiscalWeek.resolver.base";
import { FiscalWeek } from "./base/FiscalWeek";
import { FiscalWeekService } from "./fiscalWeek.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FiscalWeek)
export class FiscalWeekResolver extends FiscalWeekResolverBase {
  constructor(
    protected readonly service: FiscalWeekService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
