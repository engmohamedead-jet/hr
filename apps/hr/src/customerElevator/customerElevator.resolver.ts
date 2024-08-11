import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerElevatorResolverBase } from "./base/customerElevator.resolver.base";
import { CustomerElevator } from "./base/CustomerElevator";
import { CustomerElevatorService } from "./customerElevator.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerElevator)
export class CustomerElevatorResolver extends CustomerElevatorResolverBase {
  constructor(
    protected readonly service: CustomerElevatorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
