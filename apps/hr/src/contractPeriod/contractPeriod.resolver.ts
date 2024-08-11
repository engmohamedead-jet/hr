import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContractPeriodResolverBase } from "./base/contractPeriod.resolver.base";
import { ContractPeriod } from "./base/ContractPeriod";
import { ContractPeriodService } from "./contractPeriod.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContractPeriod)
export class ContractPeriodResolver extends ContractPeriodResolverBase {
  constructor(
    protected readonly service: ContractPeriodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
