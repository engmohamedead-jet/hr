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
import { SaleQuotation } from "./SaleQuotation";
import { SaleQuotationCountArgs } from "./SaleQuotationCountArgs";
import { SaleQuotationFindManyArgs } from "./SaleQuotationFindManyArgs";
import { SaleQuotationFindUniqueArgs } from "./SaleQuotationFindUniqueArgs";
import { CreateSaleQuotationArgs } from "./CreateSaleQuotationArgs";
import { UpdateSaleQuotationArgs } from "./UpdateSaleQuotationArgs";
import { DeleteSaleQuotationArgs } from "./DeleteSaleQuotationArgs";
import { SaleOrderFindManyArgs } from "../../saleOrder/base/SaleOrderFindManyArgs";
import { SaleOrder } from "../../saleOrder/base/SaleOrder";
import { SaleQuotationDetailFindManyArgs } from "../../saleQuotationDetail/base/SaleQuotationDetailFindManyArgs";
import { SaleQuotationDetail } from "../../saleQuotationDetail/base/SaleQuotationDetail";
import { Tenant } from "../../tenant/base/Tenant";
import { SaleQuotationService } from "../saleQuotation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SaleQuotation)
export class SaleQuotationResolverBase {
  constructor(
    protected readonly service: SaleQuotationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SaleQuotation",
    action: "read",
    possession: "any",
  })
  async _saleQuotationsMeta(
    @graphql.Args() args: SaleQuotationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SaleQuotation])
  @nestAccessControl.UseRoles({
    resource: "SaleQuotation",
    action: "read",
    possession: "any",
  })
  async saleQuotations(
    @graphql.Args() args: SaleQuotationFindManyArgs
  ): Promise<SaleQuotation[]> {
    return this.service.saleQuotations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SaleQuotation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SaleQuotation",
    action: "read",
    possession: "own",
  })
  async saleQuotation(
    @graphql.Args() args: SaleQuotationFindUniqueArgs
  ): Promise<SaleQuotation | null> {
    const result = await this.service.saleQuotation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SaleQuotation)
  @nestAccessControl.UseRoles({
    resource: "SaleQuotation",
    action: "create",
    possession: "any",
  })
  async createSaleQuotation(
    @graphql.Args() args: CreateSaleQuotationArgs
  ): Promise<SaleQuotation> {
    return await this.service.createSaleQuotation({
      ...args,
      data: {
        ...args.data,

        tenantId: args.data.tenantId
          ? {
              connect: args.data.tenantId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SaleQuotation)
  @nestAccessControl.UseRoles({
    resource: "SaleQuotation",
    action: "update",
    possession: "any",
  })
  async updateSaleQuotation(
    @graphql.Args() args: UpdateSaleQuotationArgs
  ): Promise<SaleQuotation | null> {
    try {
      return await this.service.updateSaleQuotation({
        ...args,
        data: {
          ...args.data,

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

  @graphql.Mutation(() => SaleQuotation)
  @nestAccessControl.UseRoles({
    resource: "SaleQuotation",
    action: "delete",
    possession: "any",
  })
  async deleteSaleQuotation(
    @graphql.Args() args: DeleteSaleQuotationArgs
  ): Promise<SaleQuotation | null> {
    try {
      return await this.service.deleteSaleQuotation(args);
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
  @graphql.ResolveField(() => [SaleOrder], { name: "saleOrders" })
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "read",
    possession: "any",
  })
  async findSaleOrders(
    @graphql.Parent() parent: SaleQuotation,
    @graphql.Args() args: SaleOrderFindManyArgs
  ): Promise<SaleOrder[]> {
    const results = await this.service.findSaleOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SaleQuotationDetail], {
    name: "saleQuotationDetails",
  })
  @nestAccessControl.UseRoles({
    resource: "SaleQuotationDetail",
    action: "read",
    possession: "any",
  })
  async findSaleQuotationDetails(
    @graphql.Parent() parent: SaleQuotation,
    @graphql.Args() args: SaleQuotationDetailFindManyArgs
  ): Promise<SaleQuotationDetail[]> {
    const results = await this.service.findSaleQuotationDetails(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
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
    @graphql.Parent() parent: SaleQuotation
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
