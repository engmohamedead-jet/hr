import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccountTransactionResolverBase } from "./base/accountTransaction.resolver.base";
import { AccountTransaction } from "./base/AccountTransaction";
import { AccountTransactionService } from "./accountTransaction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccountTransaction)
export class AccountTransactionResolver extends AccountTransactionResolverBase {
  constructor(
    protected readonly service: AccountTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
