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
import { PurchaseReturnDetail } from "./PurchaseReturnDetail";
import { PurchaseReturnDetailCountArgs } from "./PurchaseReturnDetailCountArgs";
import { PurchaseReturnDetailFindManyArgs } from "./PurchaseReturnDetailFindManyArgs";
import { PurchaseReturnDetailFindUniqueArgs } from "./PurchaseReturnDetailFindUniqueArgs";
import { CreatePurchaseReturnDetailArgs } from "./CreatePurchaseReturnDetailArgs";
import { UpdatePurchaseReturnDetailArgs } from "./UpdatePurchaseReturnDetailArgs";
import { DeletePurchaseReturnDetailArgs } from "./DeletePurchaseReturnDetailArgs";
import { Product } from "../../product/base/Product";
import { ProductVariant } from "../../productVariant/base/ProductVariant";
import { PurchasePriceType } from "../../purchasePriceType/base/PurchasePriceType";
import { PurchaseReturn } from "../../purchaseReturn/base/PurchaseReturn";
import { Tenant } from "../../tenant/base/Tenant";
import { Unit } from "../../unit/base/Unit";
import { PurchaseReturnDetailService } from "../purchaseReturnDetail.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PurchaseReturnDetail)
export class PurchaseReturnDetailResolverBase {
  constructor(
    protected readonly service: PurchaseReturnDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturnDetail",
    action: "read",
    possession: "any",
  })
  async _purchaseReturnDetailsMeta(
    @graphql.Args() args: PurchaseReturnDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PurchaseReturnDetail])
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturnDetail",
    action: "read",
    possession: "any",
  })
  async purchaseReturnDetails(
    @graphql.Args() args: PurchaseReturnDetailFindManyArgs
  ): Promise<PurchaseReturnDetail[]> {
    return this.service.purchaseReturnDetails(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PurchaseReturnDetail, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturnDetail",
    action: "read",
    possession: "own",
  })
  async purchaseReturnDetail(
    @graphql.Args() args: PurchaseReturnDetailFindUniqueArgs
  ): Promise<PurchaseReturnDetail | null> {
    const result = await this.service.purchaseReturnDetail(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PurchaseReturnDetail)
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturnDetail",
    action: "create",
    possession: "any",
  })
  async createPurchaseReturnDetail(
    @graphql.Args() args: CreatePurchaseReturnDetailArgs
  ): Promise<PurchaseReturnDetail> {
    return await this.service.createPurchaseReturnDetail({
      ...args,
      data: {
        ...args.data,

        productId: {
          connect: args.data.productId,
        },

        productVariantId: args.data.productVariantId
          ? {
              connect: args.data.productVariantId,
            }
          : undefined,

        purchasePriceTypeId: args.data.purchasePriceTypeId
          ? {
              connect: args.data.purchasePriceTypeId,
            }
          : undefined,

        purchaseReturnId: args.data.purchaseReturnId
          ? {
              connect: args.data.purchaseReturnId,
            }
          : undefined,

        tenantId: args.data.tenantId
          ? {
              connect: args.data.tenantId,
            }
          : undefined,

        unitId: {
          connect: args.data.unitId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PurchaseReturnDetail)
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturnDetail",
    action: "update",
    possession: "any",
  })
  async updatePurchaseReturnDetail(
    @graphql.Args() args: UpdatePurchaseReturnDetailArgs
  ): Promise<PurchaseReturnDetail | null> {
    try {
      return await this.service.updatePurchaseReturnDetail({
        ...args,
        data: {
          ...args.data,

          productId: {
            connect: args.data.productId,
          },

          productVariantId: args.data.productVariantId
            ? {
                connect: args.data.productVariantId,
              }
            : undefined,

          purchasePriceTypeId: args.data.purchasePriceTypeId
            ? {
                connect: args.data.purchasePriceTypeId,
              }
            : undefined,

          purchaseReturnId: args.data.purchaseReturnId
            ? {
                connect: args.data.purchaseReturnId,
              }
            : undefined,

          tenantId: args.data.tenantId
            ? {
                connect: args.data.tenantId,
              }
            : undefined,

          unitId: {
            connect: args.data.unitId,
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

  @graphql.Mutation(() => PurchaseReturnDetail)
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturnDetail",
    action: "delete",
    possession: "any",
  })
  async deletePurchaseReturnDetail(
    @graphql.Args() args: DeletePurchaseReturnDetailArgs
  ): Promise<PurchaseReturnDetail | null> {
    try {
      return await this.service.deletePurchaseReturnDetail(args);
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
  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "productId",
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async getProductId(
    @graphql.Parent() parent: PurchaseReturnDetail
  ): Promise<Product | null> {
    const result = await this.service.getProductId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ProductVariant, {
    nullable: true,
    name: "productVariantId",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductVariant",
    action: "read",
    possession: "any",
  })
  async getProductVariantId(
    @graphql.Parent() parent: PurchaseReturnDetail
  ): Promise<ProductVariant | null> {
    const result = await this.service.getProductVariantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PurchasePriceType, {
    nullable: true,
    name: "purchasePriceTypeId",
  })
  @nestAccessControl.UseRoles({
    resource: "PurchasePriceType",
    action: "read",
    possession: "any",
  })
  async getPurchasePriceTypeId(
    @graphql.Parent() parent: PurchaseReturnDetail
  ): Promise<PurchasePriceType | null> {
    const result = await this.service.getPurchasePriceTypeId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PurchaseReturn, {
    nullable: true,
    name: "purchaseReturnId",
  })
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturn",
    action: "read",
    possession: "any",
  })
  async getPurchaseReturnId(
    @graphql.Parent() parent: PurchaseReturnDetail
  ): Promise<PurchaseReturn | null> {
    const result = await this.service.getPurchaseReturnId(parent.id);

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
    @graphql.Parent() parent: PurchaseReturnDetail
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Unit, {
    nullable: true,
    name: "unitId",
  })
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "read",
    possession: "any",
  })
  async getUnitId(
    @graphql.Parent() parent: PurchaseReturnDetail
  ): Promise<Unit | null> {
    const result = await this.service.getUnitId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
