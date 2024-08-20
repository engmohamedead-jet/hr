import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ShippingStatusResolverBase } from "./base/shippingStatus.resolver.base";
import { ShippingStatus } from "./base/ShippingStatus";
import { ShippingStatusService } from "./shippingStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ShippingStatus)
export class ShippingStatusResolver extends ShippingStatusResolverBase {
  constructor(
    protected readonly service: ShippingStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
