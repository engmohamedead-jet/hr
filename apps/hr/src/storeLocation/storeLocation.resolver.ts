import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StoreLocationResolverBase } from "./base/storeLocation.resolver.base";
import { StoreLocation } from "./base/StoreLocation";
import { StoreLocationService } from "./storeLocation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StoreLocation)
export class StoreLocationResolver extends StoreLocationResolverBase {
  constructor(
    protected readonly service: StoreLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
