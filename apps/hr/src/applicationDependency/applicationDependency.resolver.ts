import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationDependencyResolverBase } from "./base/applicationDependency.resolver.base";
import { ApplicationDependency } from "./base/ApplicationDependency";
import { ApplicationDependencyService } from "./applicationDependency.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationDependency)
export class ApplicationDependencyResolver extends ApplicationDependencyResolverBase {
  constructor(
    protected readonly service: ApplicationDependencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
