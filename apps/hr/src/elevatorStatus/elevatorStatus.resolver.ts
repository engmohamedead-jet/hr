import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ElevatorStatusResolverBase } from "./base/elevatorStatus.resolver.base";
import { ElevatorStatus } from "./base/ElevatorStatus";
import { ElevatorStatusService } from "./elevatorStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ElevatorStatus)
export class ElevatorStatusResolver extends ElevatorStatusResolverBase {
  constructor(
    protected readonly service: ElevatorStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
