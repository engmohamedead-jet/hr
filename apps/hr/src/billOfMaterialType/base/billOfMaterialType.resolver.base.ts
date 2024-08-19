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
import { BillOfMaterialType } from "./BillOfMaterialType";
import { BillOfMaterialTypeCountArgs } from "./BillOfMaterialTypeCountArgs";
import { BillOfMaterialTypeFindManyArgs } from "./BillOfMaterialTypeFindManyArgs";
import { BillOfMaterialTypeFindUniqueArgs } from "./BillOfMaterialTypeFindUniqueArgs";
import { CreateBillOfMaterialTypeArgs } from "./CreateBillOfMaterialTypeArgs";
import { UpdateBillOfMaterialTypeArgs } from "./UpdateBillOfMaterialTypeArgs";
import { DeleteBillOfMaterialTypeArgs } from "./DeleteBillOfMaterialTypeArgs";
import { BillOfMaterialFindManyArgs } from "../../billOfMaterial/base/BillOfMaterialFindManyArgs";
import { BillOfMaterial } from "../../billOfMaterial/base/BillOfMaterial";
import { Tenant } from "../../tenant/base/Tenant";
import { BillOfMaterialTypeService } from "../billOfMaterialType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BillOfMaterialType)
export class BillOfMaterialTypeResolverBase {
  constructor(
    protected readonly service: BillOfMaterialTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BillOfMaterialType",
    action: "read",
    possession: "any",
  })
  async _billOfMaterialTypesMeta(
    @graphql.Args() args: BillOfMaterialTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BillOfMaterialType])
  @nestAccessControl.UseRoles({
    resource: "BillOfMaterialType",
    action: "read",
    possession: "any",
  })
  async billOfMaterialTypes(
    @graphql.Args() args: BillOfMaterialTypeFindManyArgs
  ): Promise<BillOfMaterialType[]> {
    return this.service.billOfMaterialTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BillOfMaterialType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BillOfMaterialType",
    action: "read",
    possession: "own",
  })
  async billOfMaterialType(
    @graphql.Args() args: BillOfMaterialTypeFindUniqueArgs
  ): Promise<BillOfMaterialType | null> {
    const result = await this.service.billOfMaterialType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BillOfMaterialType)
  @nestAccessControl.UseRoles({
    resource: "BillOfMaterialType",
    action: "create",
    possession: "any",
  })
  async createBillOfMaterialType(
    @graphql.Args() args: CreateBillOfMaterialTypeArgs
  ): Promise<BillOfMaterialType> {
    return await this.service.createBillOfMaterialType({
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
  @graphql.Mutation(() => BillOfMaterialType)
  @nestAccessControl.UseRoles({
    resource: "BillOfMaterialType",
    action: "update",
    possession: "any",
  })
  async updateBillOfMaterialType(
    @graphql.Args() args: UpdateBillOfMaterialTypeArgs
  ): Promise<BillOfMaterialType | null> {
    try {
      return await this.service.updateBillOfMaterialType({
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

  @graphql.Mutation(() => BillOfMaterialType)
  @nestAccessControl.UseRoles({
    resource: "BillOfMaterialType",
    action: "delete",
    possession: "any",
  })
  async deleteBillOfMaterialType(
    @graphql.Args() args: DeleteBillOfMaterialTypeArgs
  ): Promise<BillOfMaterialType | null> {
    try {
      return await this.service.deleteBillOfMaterialType(args);
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
  @graphql.ResolveField(() => [BillOfMaterial], { name: "billOfMaterials" })
  @nestAccessControl.UseRoles({
    resource: "BillOfMaterial",
    action: "read",
    possession: "any",
  })
  async findBillOfMaterials(
    @graphql.Parent() parent: BillOfMaterialType,
    @graphql.Args() args: BillOfMaterialFindManyArgs
  ): Promise<BillOfMaterial[]> {
    const results = await this.service.findBillOfMaterials(parent.id, args);

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
    @graphql.Parent() parent: BillOfMaterialType
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
