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
import { PrintTemplateGroup } from "./PrintTemplateGroup";
import { PrintTemplateGroupCountArgs } from "./PrintTemplateGroupCountArgs";
import { PrintTemplateGroupFindManyArgs } from "./PrintTemplateGroupFindManyArgs";
import { PrintTemplateGroupFindUniqueArgs } from "./PrintTemplateGroupFindUniqueArgs";
import { CreatePrintTemplateGroupArgs } from "./CreatePrintTemplateGroupArgs";
import { UpdatePrintTemplateGroupArgs } from "./UpdatePrintTemplateGroupArgs";
import { DeletePrintTemplateGroupArgs } from "./DeletePrintTemplateGroupArgs";
import { Tenant } from "../../tenant/base/Tenant";
import { PrintTemplateGroupService } from "../printTemplateGroup.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PrintTemplateGroup)
export class PrintTemplateGroupResolverBase {
  constructor(
    protected readonly service: PrintTemplateGroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateGroup",
    action: "read",
    possession: "any",
  })
  async _printTemplateGroupsMeta(
    @graphql.Args() args: PrintTemplateGroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PrintTemplateGroup])
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateGroup",
    action: "read",
    possession: "any",
  })
  async printTemplateGroups(
    @graphql.Args() args: PrintTemplateGroupFindManyArgs
  ): Promise<PrintTemplateGroup[]> {
    return this.service.printTemplateGroups(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PrintTemplateGroup, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateGroup",
    action: "read",
    possession: "own",
  })
  async printTemplateGroup(
    @graphql.Args() args: PrintTemplateGroupFindUniqueArgs
  ): Promise<PrintTemplateGroup | null> {
    const result = await this.service.printTemplateGroup(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PrintTemplateGroup)
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateGroup",
    action: "create",
    possession: "any",
  })
  async createPrintTemplateGroup(
    @graphql.Args() args: CreatePrintTemplateGroupArgs
  ): Promise<PrintTemplateGroup> {
    return await this.service.createPrintTemplateGroup({
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
  @graphql.Mutation(() => PrintTemplateGroup)
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateGroup",
    action: "update",
    possession: "any",
  })
  async updatePrintTemplateGroup(
    @graphql.Args() args: UpdatePrintTemplateGroupArgs
  ): Promise<PrintTemplateGroup | null> {
    try {
      return await this.service.updatePrintTemplateGroup({
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

  @graphql.Mutation(() => PrintTemplateGroup)
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateGroup",
    action: "delete",
    possession: "any",
  })
  async deletePrintTemplateGroup(
    @graphql.Args() args: DeletePrintTemplateGroupArgs
  ): Promise<PrintTemplateGroup | null> {
    try {
      return await this.service.deletePrintTemplateGroup(args);
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
    @graphql.Parent() parent: PrintTemplateGroup
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
