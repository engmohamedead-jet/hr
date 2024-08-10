/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Account } from "./Account";
import { AccountCountArgs } from "./AccountCountArgs";
import { AccountFindManyArgs } from "./AccountFindManyArgs";
import { AccountFindUniqueArgs } from "./AccountFindUniqueArgs";
import { CreateAccountArgs } from "./CreateAccountArgs";
import { UpdateAccountArgs } from "./UpdateAccountArgs";
import { DeleteAccountArgs } from "./DeleteAccountArgs";
import { AccountCategory } from "../../accountCategory/base/AccountCategory";
import { AccountType } from "../../accountType/base/AccountType";
import { Currency } from "../../currency/base/Currency";
import { AccountService } from "../account.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Account)
export class AccountResolverBase {
  constructor(
    protected readonly service: AccountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async _accountsMeta(
    @graphql.Args() args: AccountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Account])
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async accounts(
    @graphql.Args() args: AccountFindManyArgs
  ): Promise<Account[]> {
    return this.service.accounts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Account, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "own",
  })
  async account(
    @graphql.Args() args: AccountFindUniqueArgs
  ): Promise<Account | null> {
    const result = await this.service.account(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "create",
    possession: "any",
  })
  async createAccount(
    @graphql.Args() args: CreateAccountArgs
  ): Promise<Account> {
    return await this.service.createAccount({
      ...args,
      data: {
        ...args.data,

        accountCategory: args.data.accountCategory
          ? {
              connect: args.data.accountCategory,
            }
          : undefined,

        accountTypeId: {
          connect: args.data.accountTypeId,
        },

        currencyId: {
          connect: args.data.currencyId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async updateAccount(
    @graphql.Args() args: UpdateAccountArgs
  ): Promise<Account | null> {
    try {
      return await this.service.updateAccount({
        ...args,
        data: {
          ...args.data,

          accountCategory: args.data.accountCategory
            ? {
                connect: args.data.accountCategory,
              }
            : undefined,

          accountTypeId: {
            connect: args.data.accountTypeId,
          },

          currencyId: {
            connect: args.data.currencyId,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "delete",
    possession: "any",
  })
  async deleteAccount(
    @graphql.Args() args: DeleteAccountArgs
  ): Promise<Account | null> {
    try {
      return await this.service.deleteAccount(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => AccountCategory, {
    nullable: true,
    name: "accountCategory",
  })
  @nestAccessControl.UseRoles({
    resource: "AccountCategory",
    action: "read",
    possession: "any",
  })
  async getAccountCategory(
    @graphql.Parent() parent: Account
  ): Promise<AccountCategory | null> {
    const result = await this.service.getAccountCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => AccountType, {
    nullable: true,
    name: "accountTypeId",
  })
  @nestAccessControl.UseRoles({
    resource: "AccountType",
    action: "read",
    possession: "any",
  })
  async getAccountTypeId(
    @graphql.Parent() parent: Account
  ): Promise<AccountType | null> {
    const result = await this.service.getAccountTypeId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Currency, {
    nullable: true,
    name: "currencyId",
  })
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "any",
  })
  async getCurrencyId(
    @graphql.Parent() parent: Account
  ): Promise<Currency | null> {
    const result = await this.service.getCurrencyId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}