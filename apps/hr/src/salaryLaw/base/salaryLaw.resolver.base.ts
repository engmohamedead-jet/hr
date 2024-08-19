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
import { SalaryLaw } from "./SalaryLaw";
import { SalaryLawCountArgs } from "./SalaryLawCountArgs";
import { SalaryLawFindManyArgs } from "./SalaryLawFindManyArgs";
import { SalaryLawFindUniqueArgs } from "./SalaryLawFindUniqueArgs";
import { CreateSalaryLawArgs } from "./CreateSalaryLawArgs";
import { UpdateSalaryLawArgs } from "./UpdateSalaryLawArgs";
import { DeleteSalaryLawArgs } from "./DeleteSalaryLawArgs";
import { SalaryItemFindManyArgs } from "../../salaryItem/base/SalaryItemFindManyArgs";
import { SalaryItem } from "../../salaryItem/base/SalaryItem";
import { Tenant } from "../../tenant/base/Tenant";
import { SalaryLawService } from "../salaryLaw.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalaryLaw)
export class SalaryLawResolverBase {
  constructor(
    protected readonly service: SalaryLawService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SalaryLaw",
    action: "read",
    possession: "any",
  })
  async _salaryLawsMeta(
    @graphql.Args() args: SalaryLawCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SalaryLaw])
  @nestAccessControl.UseRoles({
    resource: "SalaryLaw",
    action: "read",
    possession: "any",
  })
  async salaryLaws(
    @graphql.Args() args: SalaryLawFindManyArgs
  ): Promise<SalaryLaw[]> {
    return this.service.salaryLaws(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SalaryLaw, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SalaryLaw",
    action: "read",
    possession: "own",
  })
  async salaryLaw(
    @graphql.Args() args: SalaryLawFindUniqueArgs
  ): Promise<SalaryLaw | null> {
    const result = await this.service.salaryLaw(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SalaryLaw)
  @nestAccessControl.UseRoles({
    resource: "SalaryLaw",
    action: "create",
    possession: "any",
  })
  async createSalaryLaw(
    @graphql.Args() args: CreateSalaryLawArgs
  ): Promise<SalaryLaw> {
    return await this.service.createSalaryLaw({
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
  @graphql.Mutation(() => SalaryLaw)
  @nestAccessControl.UseRoles({
    resource: "SalaryLaw",
    action: "update",
    possession: "any",
  })
  async updateSalaryLaw(
    @graphql.Args() args: UpdateSalaryLawArgs
  ): Promise<SalaryLaw | null> {
    try {
      return await this.service.updateSalaryLaw({
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

  @graphql.Mutation(() => SalaryLaw)
  @nestAccessControl.UseRoles({
    resource: "SalaryLaw",
    action: "delete",
    possession: "any",
  })
  async deleteSalaryLaw(
    @graphql.Args() args: DeleteSalaryLawArgs
  ): Promise<SalaryLaw | null> {
    try {
      return await this.service.deleteSalaryLaw(args);
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
  @graphql.ResolveField(() => [SalaryItem], { name: "salaryItems" })
  @nestAccessControl.UseRoles({
    resource: "SalaryItem",
    action: "read",
    possession: "any",
  })
  async findSalaryItems(
    @graphql.Parent() parent: SalaryLaw,
    @graphql.Args() args: SalaryItemFindManyArgs
  ): Promise<SalaryItem[]> {
    const results = await this.service.findSalaryItems(parent.id, args);

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
    @graphql.Parent() parent: SalaryLaw
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}