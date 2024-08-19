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
import { SaleReturnDetail } from "./SaleReturnDetail";
import { SaleReturnDetailCountArgs } from "./SaleReturnDetailCountArgs";
import { SaleReturnDetailFindManyArgs } from "./SaleReturnDetailFindManyArgs";
import { SaleReturnDetailFindUniqueArgs } from "./SaleReturnDetailFindUniqueArgs";
import { CreateSaleReturnDetailArgs } from "./CreateSaleReturnDetailArgs";
import { UpdateSaleReturnDetailArgs } from "./UpdateSaleReturnDetailArgs";
import { DeleteSaleReturnDetailArgs } from "./DeleteSaleReturnDetailArgs";
import { Product } from "../../product/base/Product";
import { ProductVariant } from "../../productVariant/base/ProductVariant";
import { SalePriceType } from "../../salePriceType/base/SalePriceType";
import { SaleReturn } from "../../saleReturn/base/SaleReturn";
import { Tenant } from "../../tenant/base/Tenant";
import { Unit } from "../../unit/base/Unit";
import { SaleReturnDetailService } from "../saleReturnDetail.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SaleReturnDetail)
export class SaleReturnDetailResolverBase {
  constructor(
    protected readonly service: SaleReturnDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SaleReturnDetail",
    action: "read",
    possession: "any",
  })
  async _saleReturnDetailsMeta(
    @graphql.Args() args: SaleReturnDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SaleReturnDetail])
  @nestAccessControl.UseRoles({
    resource: "SaleReturnDetail",
    action: "read",
    possession: "any",
  })
  async saleReturnDetails(
    @graphql.Args() args: SaleReturnDetailFindManyArgs
  ): Promise<SaleReturnDetail[]> {
    return this.service.saleReturnDetails(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SaleReturnDetail, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SaleReturnDetail",
    action: "read",
    possession: "own",
  })
  async saleReturnDetail(
    @graphql.Args() args: SaleReturnDetailFindUniqueArgs
  ): Promise<SaleReturnDetail | null> {
    const result = await this.service.saleReturnDetail(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SaleReturnDetail)
  @nestAccessControl.UseRoles({
    resource: "SaleReturnDetail",
    action: "create",
    possession: "any",
  })
  async createSaleReturnDetail(
    @graphql.Args() args: CreateSaleReturnDetailArgs
  ): Promise<SaleReturnDetail> {
    return await this.service.createSaleReturnDetail({
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

        salePriceType: args.data.salePriceType
          ? {
              connect: args.data.salePriceType,
            }
          : undefined,

        saleReturnId: {
          connect: args.data.saleReturnId,
        },

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
  @graphql.Mutation(() => SaleReturnDetail)
  @nestAccessControl.UseRoles({
    resource: "SaleReturnDetail",
    action: "update",
    possession: "any",
  })
  async updateSaleReturnDetail(
    @graphql.Args() args: UpdateSaleReturnDetailArgs
  ): Promise<SaleReturnDetail | null> {
    try {
      return await this.service.updateSaleReturnDetail({
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

          salePriceType: args.data.salePriceType
            ? {
                connect: args.data.salePriceType,
              }
            : undefined,

          saleReturnId: {
            connect: args.data.saleReturnId,
          },

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

  @graphql.Mutation(() => SaleReturnDetail)
  @nestAccessControl.UseRoles({
    resource: "SaleReturnDetail",
    action: "delete",
    possession: "any",
  })
  async deleteSaleReturnDetail(
    @graphql.Args() args: DeleteSaleReturnDetailArgs
  ): Promise<SaleReturnDetail | null> {
    try {
      return await this.service.deleteSaleReturnDetail(args);
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
    @graphql.Parent() parent: SaleReturnDetail
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
    @graphql.Parent() parent: SaleReturnDetail
  ): Promise<ProductVariant | null> {
    const result = await this.service.getProductVariantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SalePriceType, {
    nullable: true,
    name: "salePriceType",
  })
  @nestAccessControl.UseRoles({
    resource: "SalePriceType",
    action: "read",
    possession: "any",
  })
  async getSalePriceType(
    @graphql.Parent() parent: SaleReturnDetail
  ): Promise<SalePriceType | null> {
    const result = await this.service.getSalePriceType(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SaleReturn, {
    nullable: true,
    name: "saleReturnId",
  })
  @nestAccessControl.UseRoles({
    resource: "SaleReturn",
    action: "read",
    possession: "any",
  })
  async getSaleReturnId(
    @graphql.Parent() parent: SaleReturnDetail
  ): Promise<SaleReturn | null> {
    const result = await this.service.getSaleReturnId(parent.id);

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
    @graphql.Parent() parent: SaleReturnDetail
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
    @graphql.Parent() parent: SaleReturnDetail
  ): Promise<Unit | null> {
    const result = await this.service.getUnitId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
