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
import { PurchasePriceType } from "./PurchasePriceType";
import { PurchasePriceTypeCountArgs } from "./PurchasePriceTypeCountArgs";
import { PurchasePriceTypeFindManyArgs } from "./PurchasePriceTypeFindManyArgs";
import { PurchasePriceTypeFindUniqueArgs } from "./PurchasePriceTypeFindUniqueArgs";
import { CreatePurchasePriceTypeArgs } from "./CreatePurchasePriceTypeArgs";
import { UpdatePurchasePriceTypeArgs } from "./UpdatePurchasePriceTypeArgs";
import { DeletePurchasePriceTypeArgs } from "./DeletePurchasePriceTypeArgs";
import { PurchaseDetail } from "../../purchaseDetail/base/PurchaseDetail";
import { PurchaseReturnDetail } from "../../purchaseReturnDetail/base/PurchaseReturnDetail";
import { PurchaseReturn } from "../../purchaseReturn/base/PurchaseReturn";
import { Purchase } from "../../purchase/base/Purchase";
import { Tenant } from "../../tenant/base/Tenant";
import { PurchasePriceTypeService } from "../purchasePriceType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PurchasePriceType)
export class PurchasePriceTypeResolverBase {
  constructor(
    protected readonly service: PurchasePriceTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PurchasePriceType",
    action: "read",
    possession: "any",
  })
  async _purchasePriceTypesMeta(
    @graphql.Args() args: PurchasePriceTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PurchasePriceType])
  @nestAccessControl.UseRoles({
    resource: "PurchasePriceType",
    action: "read",
    possession: "any",
  })
  async purchasePriceTypes(
    @graphql.Args() args: PurchasePriceTypeFindManyArgs
  ): Promise<PurchasePriceType[]> {
    return this.service.purchasePriceTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PurchasePriceType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PurchasePriceType",
    action: "read",
    possession: "own",
  })
  async purchasePriceType(
    @graphql.Args() args: PurchasePriceTypeFindUniqueArgs
  ): Promise<PurchasePriceType | null> {
    const result = await this.service.purchasePriceType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PurchasePriceType)
  @nestAccessControl.UseRoles({
    resource: "PurchasePriceType",
    action: "create",
    possession: "any",
  })
  async createPurchasePriceType(
    @graphql.Args() args: CreatePurchasePriceTypeArgs
  ): Promise<PurchasePriceType> {
    return await this.service.createPurchasePriceType({
      ...args,
      data: {
        ...args.data,

        purchaseDetails: args.data.purchaseDetails
          ? {
              connect: args.data.purchaseDetails,
            }
          : undefined,

        purchaseReturnDetails: args.data.purchaseReturnDetails
          ? {
              connect: args.data.purchaseReturnDetails,
            }
          : undefined,

        purchaseReturns: args.data.purchaseReturns
          ? {
              connect: args.data.purchaseReturns,
            }
          : undefined,

        purchases: args.data.purchases
          ? {
              connect: args.data.purchases,
            }
          : undefined,

        tenantId: args.data.tenantId
          ? {
              connect: args.data.tenantId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PurchasePriceType)
  @nestAccessControl.UseRoles({
    resource: "PurchasePriceType",
    action: "update",
    possession: "any",
  })
  async updatePurchasePriceType(
    @graphql.Args() args: UpdatePurchasePriceTypeArgs
  ): Promise<PurchasePriceType | null> {
    try {
      return await this.service.updatePurchasePriceType({
        ...args,
        data: {
          ...args.data,

          purchaseDetails: args.data.purchaseDetails
            ? {
                connect: args.data.purchaseDetails,
              }
            : undefined,

          purchaseReturnDetails: args.data.purchaseReturnDetails
            ? {
                connect: args.data.purchaseReturnDetails,
              }
            : undefined,

          purchaseReturns: args.data.purchaseReturns
            ? {
                connect: args.data.purchaseReturns,
              }
            : undefined,

          purchases: args.data.purchases
            ? {
                connect: args.data.purchases,
              }
            : undefined,

          tenantId: args.data.tenantId
            ? {
                connect: args.data.tenantId,
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

  @graphql.Mutation(() => PurchasePriceType)
  @nestAccessControl.UseRoles({
    resource: "PurchasePriceType",
    action: "delete",
    possession: "any",
  })
  async deletePurchasePriceType(
    @graphql.Args() args: DeletePurchasePriceTypeArgs
  ): Promise<PurchasePriceType | null> {
    try {
      return await this.service.deletePurchasePriceType(args);
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
  @graphql.ResolveField(() => PurchaseDetail, {
    nullable: true,
    name: "purchaseDetails",
  })
  @nestAccessControl.UseRoles({
    resource: "PurchaseDetail",
    action: "read",
    possession: "any",
  })
  async getPurchaseDetails(
    @graphql.Parent() parent: PurchasePriceType
  ): Promise<PurchaseDetail | null> {
    const result = await this.service.getPurchaseDetails(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PurchaseReturnDetail, {
    nullable: true,
    name: "purchaseReturnDetails",
  })
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturnDetail",
    action: "read",
    possession: "any",
  })
  async getPurchaseReturnDetails(
    @graphql.Parent() parent: PurchasePriceType
  ): Promise<PurchaseReturnDetail | null> {
    const result = await this.service.getPurchaseReturnDetails(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PurchaseReturn, {
    nullable: true,
    name: "purchaseReturns",
  })
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturn",
    action: "read",
    possession: "any",
  })
  async getPurchaseReturns(
    @graphql.Parent() parent: PurchasePriceType
  ): Promise<PurchaseReturn | null> {
    const result = await this.service.getPurchaseReturns(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Purchase, {
    nullable: true,
    name: "purchases",
  })
  @nestAccessControl.UseRoles({
    resource: "Purchase",
    action: "read",
    possession: "any",
  })
  async getPurchases(
    @graphql.Parent() parent: PurchasePriceType
  ): Promise<Purchase | null> {
    const result = await this.service.getPurchases(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenantId",
  })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "any",
  })
  async getTenantId(
    @graphql.Parent() parent: PurchasePriceType
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}