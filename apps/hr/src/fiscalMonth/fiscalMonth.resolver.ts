import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FiscalMonthResolverBase } from "./base/fiscalMonth.resolver.base";
import { FiscalMonth } from "./base/FiscalMonth";
import { FiscalMonthService } from "./fiscalMonth.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FiscalMonth)
export class FiscalMonthResolver extends FiscalMonthResolverBase {
  constructor(
    protected readonly service: FiscalMonthService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
