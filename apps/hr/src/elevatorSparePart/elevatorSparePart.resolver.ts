import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ElevatorSparePartResolverBase } from "./base/elevatorSparePart.resolver.base";
import { ElevatorSparePart } from "./base/ElevatorSparePart";
import { ElevatorSparePartService } from "./elevatorSparePart.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ElevatorSparePart)
export class ElevatorSparePartResolver extends ElevatorSparePartResolverBase {
  constructor(
    protected readonly service: ElevatorSparePartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
