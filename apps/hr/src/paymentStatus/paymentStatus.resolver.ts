import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentStatusResolverBase } from "./base/paymentStatus.resolver.base";
import { PaymentStatus } from "./base/PaymentStatus";
import { PaymentStatusService } from "./paymentStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentStatus)
export class PaymentStatusResolver extends PaymentStatusResolverBase {
  constructor(
    protected readonly service: PaymentStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
