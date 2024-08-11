import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MaintenanceVisitResolverBase } from "./base/maintenanceVisit.resolver.base";
import { MaintenanceVisit } from "./base/MaintenanceVisit";
import { MaintenanceVisitService } from "./maintenanceVisit.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MaintenanceVisit)
export class MaintenanceVisitResolver extends MaintenanceVisitResolverBase {
  constructor(
    protected readonly service: MaintenanceVisitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
