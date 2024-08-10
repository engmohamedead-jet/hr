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
import { SalePriceType } from "./SalePriceType";
import { SalePriceTypeCountArgs } from "./SalePriceTypeCountArgs";
import { SalePriceTypeFindManyArgs } from "./SalePriceTypeFindManyArgs";
import { SalePriceTypeFindUniqueArgs } from "./SalePriceTypeFindUniqueArgs";
import { CreateSalePriceTypeArgs } from "./CreateSalePriceTypeArgs";
import { UpdateSalePriceTypeArgs } from "./UpdateSalePriceTypeArgs";
import { DeleteSalePriceTypeArgs } from "./DeleteSalePriceTypeArgs";
import { Customer } from "../../customer/base/Customer";
import { SalePriceTypeService } from "../salePriceType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalePriceType)
export class SalePriceTypeResolverBase {
  constructor(
    protected readonly service: SalePriceTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SalePriceType",
    action: "read",
    possession: "any",
  })
  async _salePriceTypesMeta(
    @graphql.Args() args: SalePriceTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SalePriceType])
  @nestAccessControl.UseRoles({
    resource: "SalePriceType",
    action: "read",
    possession: "any",
  })
  async salePriceTypes(
    @graphql.Args() args: SalePriceTypeFindManyArgs
  ): Promise<SalePriceType[]> {
    return this.service.salePriceTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SalePriceType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SalePriceType",
    action: "read",
    possession: "own",
  })
  async salePriceType(
    @graphql.Args() args: SalePriceTypeFindUniqueArgs
  ): Promise<SalePriceType | null> {
    const result = await this.service.salePriceType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SalePriceType)
  @nestAccessControl.UseRoles({
    resource: "SalePriceType",
    action: "create",
    possession: "any",
  })
  async createSalePriceType(
    @graphql.Args() args: CreateSalePriceTypeArgs
  ): Promise<SalePriceType> {
    return await this.service.createSalePriceType({
      ...args,
      data: {
        ...args.data,

        customers: args.data.customers
          ? {
              connect: args.data.customers,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SalePriceType)
  @nestAccessControl.UseRoles({
    resource: "SalePriceType",
    action: "update",
    possession: "any",
  })
  async updateSalePriceType(
    @graphql.Args() args: UpdateSalePriceTypeArgs
  ): Promise<SalePriceType | null> {
    try {
      return await this.service.updateSalePriceType({
        ...args,
        data: {
          ...args.data,

          customers: args.data.customers
            ? {
                connect: args.data.customers,
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

  @graphql.Mutation(() => SalePriceType)
  @nestAccessControl.UseRoles({
    resource: "SalePriceType",
    action: "delete",
    possession: "any",
  })
  async deleteSalePriceType(
    @graphql.Args() args: DeleteSalePriceTypeArgs
  ): Promise<SalePriceType | null> {
    try {
      return await this.service.deleteSalePriceType(args);
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
  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customers",
  })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async getCustomers(
    @graphql.Parent() parent: SalePriceType
  ): Promise<Customer | null> {
    const result = await this.service.getCustomers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
