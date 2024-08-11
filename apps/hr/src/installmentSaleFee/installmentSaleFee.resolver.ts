import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InstallmentSaleFeeResolverBase } from "./base/installmentSaleFee.resolver.base";
import { InstallmentSaleFee } from "./base/InstallmentSaleFee";
import { InstallmentSaleFeeService } from "./installmentSaleFee.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InstallmentSaleFee)
export class InstallmentSaleFeeResolver extends InstallmentSaleFeeResolverBase {
  constructor(
    protected readonly service: InstallmentSaleFeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
