import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MaintenanceContractResolverBase } from "./base/maintenanceContract.resolver.base";
import { MaintenanceContract } from "./base/MaintenanceContract";
import { MaintenanceContractService } from "./maintenanceContract.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MaintenanceContract)
export class MaintenanceContractResolver extends MaintenanceContractResolverBase {
  constructor(
    protected readonly service: MaintenanceContractService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
