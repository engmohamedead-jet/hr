import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalaryLawResolverBase } from "./base/salaryLaw.resolver.base";
import { SalaryLaw } from "./base/SalaryLaw";
import { SalaryLawService } from "./salaryLaw.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalaryLaw)
export class SalaryLawResolver extends SalaryLawResolverBase {
  constructor(
    protected readonly service: SalaryLawService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
