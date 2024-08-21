import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProductionAvailabilityResolverBase } from "./base/productionAvailability.resolver.base";
import { ProductionAvailability } from "./base/ProductionAvailability";
import { ProductionAvailabilityService } from "./productionAvailability.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductionAvailability)
export class ProductionAvailabilityResolver extends ProductionAvailabilityResolverBase {
  constructor(
    protected readonly service: ProductionAvailabilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
