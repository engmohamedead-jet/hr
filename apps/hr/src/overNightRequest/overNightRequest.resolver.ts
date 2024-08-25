import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OverNightRequestResolverBase } from "./base/overNightRequest.resolver.base";
import { OverNightRequest } from "./base/OverNightRequest";
import { OverNightRequestService } from "./overNightRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OverNightRequest)
export class OverNightRequestResolver extends OverNightRequestResolverBase {
  constructor(
    protected readonly service: OverNightRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
