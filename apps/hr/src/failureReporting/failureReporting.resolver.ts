import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FailureReportingResolverBase } from "./base/failureReporting.resolver.base";
import { FailureReporting } from "./base/FailureReporting";
import { FailureReportingService } from "./failureReporting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FailureReporting)
export class FailureReportingResolver extends FailureReportingResolverBase {
  constructor(
    protected readonly service: FailureReportingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
