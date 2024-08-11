import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InstallationContractResolverBase } from "./base/installationContract.resolver.base";
import { InstallationContract } from "./base/InstallationContract";
import { InstallationContractService } from "./installationContract.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InstallationContract)
export class InstallationContractResolver extends InstallationContractResolverBase {
  constructor(
    protected readonly service: InstallationContractService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
