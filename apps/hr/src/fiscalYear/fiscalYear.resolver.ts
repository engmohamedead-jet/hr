import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FiscalYearResolverBase } from "./base/fiscalYear.resolver.base";
import { FiscalYear } from "./base/FiscalYear";
import { FiscalYearService } from "./fiscalYear.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FiscalYear)
export class FiscalYearResolver extends FiscalYearResolverBase {
  constructor(
    protected readonly service: FiscalYearService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
