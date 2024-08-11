import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ElevatorTypeResolverBase } from "./base/elevatorType.resolver.base";
import { ElevatorType } from "./base/ElevatorType";
import { ElevatorTypeService } from "./elevatorType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ElevatorType)
export class ElevatorTypeResolver extends ElevatorTypeResolverBase {
  constructor(
    protected readonly service: ElevatorTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
