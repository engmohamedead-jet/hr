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
import { BankBranch } from "./BankBranch";
import { BankBranchCountArgs } from "./BankBranchCountArgs";
import { BankBranchFindManyArgs } from "./BankBranchFindManyArgs";
import { BankBranchFindUniqueArgs } from "./BankBranchFindUniqueArgs";
import { CreateBankBranchArgs } from "./CreateBankBranchArgs";
import { UpdateBankBranchArgs } from "./UpdateBankBranchArgs";
import { DeleteBankBranchArgs } from "./DeleteBankBranchArgs";
import { SalePaymentFindManyArgs } from "../../salePayment/base/SalePaymentFindManyArgs";
import { SalePayment } from "../../salePayment/base/SalePayment";
import { Bank } from "../../bank/base/Bank";
import { Tenant } from "../../tenant/base/Tenant";
import { BankBranchService } from "../bankBranch.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BankBranch)
export class BankBranchResolverBase {
  constructor(
    protected readonly service: BankBranchService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BankBranch",
    action: "read",
    possession: "any",
  })
  async _bankBranchesMeta(
    @graphql.Args() args: BankBranchCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BankBranch])
  @nestAccessControl.UseRoles({
    resource: "BankBranch",
    action: "read",
    possession: "any",
  })
  async bankBranches(
    @graphql.Args() args: BankBranchFindManyArgs
  ): Promise<BankBranch[]> {
    return this.service.bankBranches(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BankBranch, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BankBranch",
    action: "read",
    possession: "own",
  })
  async bankBranch(
    @graphql.Args() args: BankBranchFindUniqueArgs
  ): Promise<BankBranch | null> {
    const result = await this.service.bankBranch(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BankBranch)
  @nestAccessControl.UseRoles({
    resource: "BankBranch",
    action: "create",
    possession: "any",
  })
  async createBankBranch(
    @graphql.Args() args: CreateBankBranchArgs
  ): Promise<BankBranch> {
    return await this.service.createBankBranch({
      ...args,
      data: {
        ...args.data,

        bank: {
          connect: args.data.bank,
        },

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BankBranch)
  @nestAccessControl.UseRoles({
    resource: "BankBranch",
    action: "update",
    possession: "any",
  })
  async updateBankBranch(
    @graphql.Args() args: UpdateBankBranchArgs
  ): Promise<BankBranch | null> {
    try {
      return await this.service.updateBankBranch({
        ...args,
        data: {
          ...args.data,

          bank: {
            connect: args.data.bank,
          },

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
              }
            : undefined,
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

  @graphql.Mutation(() => BankBranch)
  @nestAccessControl.UseRoles({
    resource: "BankBranch",
    action: "delete",
    possession: "any",
  })
  async deleteBankBranch(
    @graphql.Args() args: DeleteBankBranchArgs
  ): Promise<BankBranch | null> {
    try {
      return await this.service.deleteBankBranch(args);
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
  @graphql.ResolveField(() => [SalePayment], { name: "salePayments" })
  @nestAccessControl.UseRoles({
    resource: "SalePayment",
    action: "read",
    possession: "any",
  })
  async findSalePayments(
    @graphql.Parent() parent: BankBranch,
    @graphql.Args() args: SalePaymentFindManyArgs
  ): Promise<SalePayment[]> {
    const results = await this.service.findSalePayments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Bank, {
    nullable: true,
    name: "bank",
  })
  @nestAccessControl.UseRoles({
    resource: "Bank",
    action: "read",
    possession: "any",
  })
  async getBank(@graphql.Parent() parent: BankBranch): Promise<Bank | null> {
    const result = await this.service.getBank(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenant",
  })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "any",
  })
  async getTenant(
    @graphql.Parent() parent: BankBranch
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
