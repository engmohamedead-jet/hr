import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BankBranchResolverBase } from "./base/bankBranch.resolver.base";
import { BankBranch } from "./base/BankBranch";
import { BankBranchService } from "./bankBranch.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BankBranch)
export class BankBranchResolver extends BankBranchResolverBase {
  constructor(
    protected readonly service: BankBranchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
