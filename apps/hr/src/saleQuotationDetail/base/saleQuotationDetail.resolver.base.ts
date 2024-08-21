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
import { SaleQuotationDetail } from "./SaleQuotationDetail";
import { SaleQuotationDetailCountArgs } from "./SaleQuotationDetailCountArgs";
import { SaleQuotationDetailFindManyArgs } from "./SaleQuotationDetailFindManyArgs";
import { SaleQuotationDetailFindUniqueArgs } from "./SaleQuotationDetailFindUniqueArgs";
import { CreateSaleQuotationDetailArgs } from "./CreateSaleQuotationDetailArgs";
import { UpdateSaleQuotationDetailArgs } from "./UpdateSaleQuotationDetailArgs";
import { DeleteSaleQuotationDetailArgs } from "./DeleteSaleQuotationDetailArgs";
import { Product } from "../../product/base/Product";
import { ProductVariant } from "../../productVariant/base/ProductVariant";
import { SalePriceType } from "../../salePriceType/base/SalePriceType";
import { SaleQuotation } from "../../saleQuotation/base/SaleQuotation";
import { Tenant } from "../../tenant/base/Tenant";
import { Unit } from "../../unit/base/Unit";
import { SaleQuotationDetailService } from "../saleQuotationDetail.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SaleQuotationDetail)
export class SaleQuotationDetailResolverBase {
  constructor(
    protected readonly service: SaleQuotationDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SaleQuotationDetail",
    action: "read",
    possession: "any",
  })
  async _saleQuotationDetailsMeta(
    @graphql.Args() args: SaleQuotationDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SaleQuotationDetail])
  @nestAccessControl.UseRoles({
    resource: "SaleQuotationDetail",
    action: "read",
    possession: "any",
  })
  async saleQuotationDetails(
    @graphql.Args() args: SaleQuotationDetailFindManyArgs
  ): Promise<SaleQuotationDetail[]> {
    return this.service.saleQuotationDetails(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SaleQuotationDetail, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SaleQuotationDetail",
    action: "read",
    possession: "own",
  })
  async saleQuotationDetail(
    @graphql.Args() args: SaleQuotationDetailFindUniqueArgs
  ): Promise<SaleQuotationDetail | null> {
    const result = await this.service.saleQuotationDetail(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SaleQuotationDetail)
  @nestAccessControl.UseRoles({
    resource: "SaleQuotationDetail",
    action: "create",
    possession: "any",
  })
  async createSaleQuotationDetail(
    @graphql.Args() args: CreateSaleQuotationDetailArgs
  ): Promise<SaleQuotationDetail> {
    return await this.service.createSaleQuotationDetail({
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

        saleQuotationId: args.data.saleQuotationId
          ? {
              connect: args.data.saleQuotationId,
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
  @graphql.Mutation(() => SaleQuotationDetail)
  @nestAccessControl.UseRoles({
    resource: "SaleQuotationDetail",
    action: "update",
    possession: "any",
  })
  async updateSaleQuotationDetail(
    @graphql.Args() args: UpdateSaleQuotationDetailArgs
  ): Promise<SaleQuotationDetail | null> {
    try {
      return await this.service.updateSaleQuotationDetail({
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

          saleQuotationId: args.data.saleQuotationId
            ? {
                connect: args.data.saleQuotationId,
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

  @graphql.Mutation(() => SaleQuotationDetail)
  @nestAccessControl.UseRoles({
    resource: "SaleQuotationDetail",
    action: "delete",
    possession: "any",
  })
  async deleteSaleQuotationDetail(
    @graphql.Args() args: DeleteSaleQuotationDetailArgs
  ): Promise<SaleQuotationDetail | null> {
    try {
      return await this.service.deleteSaleQuotationDetail(args);
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
    @graphql.Parent() parent: SaleQuotationDetail
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
    @graphql.Parent() parent: SaleQuotationDetail
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
    @graphql.Parent() parent: SaleQuotationDetail
  ): Promise<SalePriceType | null> {
    const result = await this.service.getSalePriceType(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SaleQuotation, {
    nullable: true,
    name: "saleQuotationId",
  })
  @nestAccessControl.UseRoles({
    resource: "SaleQuotation",
    action: "read",
    possession: "any",
  })
  async getSaleQuotationId(
    @graphql.Parent() parent: SaleQuotationDetail
  ): Promise<SaleQuotation | null> {
    const result = await this.service.getSaleQuotationId(parent.id);

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
    @graphql.Parent() parent: SaleQuotationDetail
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
    @graphql.Parent() parent: SaleQuotationDetail
  ): Promise<Unit | null> {
    const result = await this.service.getUnitId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
