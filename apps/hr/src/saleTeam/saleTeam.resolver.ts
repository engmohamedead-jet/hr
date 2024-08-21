import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SaleTeamResolverBase } from "./base/saleTeam.resolver.base";
import { SaleTeam } from "./base/SaleTeam";
import { SaleTeamService } from "./saleTeam.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SaleTeam)
export class SaleTeamResolver extends SaleTeamResolverBase {
  constructor(
    protected readonly service: SaleTeamService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
