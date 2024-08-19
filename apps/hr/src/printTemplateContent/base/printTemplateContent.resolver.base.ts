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
import { PrintTemplateContent } from "./PrintTemplateContent";
import { PrintTemplateContentCountArgs } from "./PrintTemplateContentCountArgs";
import { PrintTemplateContentFindManyArgs } from "./PrintTemplateContentFindManyArgs";
import { PrintTemplateContentFindUniqueArgs } from "./PrintTemplateContentFindUniqueArgs";
import { CreatePrintTemplateContentArgs } from "./CreatePrintTemplateContentArgs";
import { UpdatePrintTemplateContentArgs } from "./UpdatePrintTemplateContentArgs";
import { DeletePrintTemplateContentArgs } from "./DeletePrintTemplateContentArgs";
import { PrintTemplate } from "../../printTemplate/base/PrintTemplate";
import { Tenant } from "../../tenant/base/Tenant";
import { PrintTemplateContentService } from "../printTemplateContent.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PrintTemplateContent)
export class PrintTemplateContentResolverBase {
  constructor(
    protected readonly service: PrintTemplateContentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateContent",
    action: "read",
    possession: "any",
  })
  async _printTemplateContentsMeta(
    @graphql.Args() args: PrintTemplateContentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PrintTemplateContent])
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateContent",
    action: "read",
    possession: "any",
  })
  async printTemplateContents(
    @graphql.Args() args: PrintTemplateContentFindManyArgs
  ): Promise<PrintTemplateContent[]> {
    return this.service.printTemplateContents(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PrintTemplateContent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateContent",
    action: "read",
    possession: "own",
  })
  async printTemplateContent(
    @graphql.Args() args: PrintTemplateContentFindUniqueArgs
  ): Promise<PrintTemplateContent | null> {
    const result = await this.service.printTemplateContent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PrintTemplateContent)
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateContent",
    action: "create",
    possession: "any",
  })
  async createPrintTemplateContent(
    @graphql.Args() args: CreatePrintTemplateContentArgs
  ): Promise<PrintTemplateContent> {
    return await this.service.createPrintTemplateContent({
      ...args,
      data: {
        ...args.data,

        printTemplateId: args.data.printTemplateId
          ? {
              connect: args.data.printTemplateId,
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
  @graphql.Mutation(() => PrintTemplateContent)
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateContent",
    action: "update",
    possession: "any",
  })
  async updatePrintTemplateContent(
    @graphql.Args() args: UpdatePrintTemplateContentArgs
  ): Promise<PrintTemplateContent | null> {
    try {
      return await this.service.updatePrintTemplateContent({
        ...args,
        data: {
          ...args.data,

          printTemplateId: args.data.printTemplateId
            ? {
                connect: args.data.printTemplateId,
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

  @graphql.Mutation(() => PrintTemplateContent)
  @nestAccessControl.UseRoles({
    resource: "PrintTemplateContent",
    action: "delete",
    possession: "any",
  })
  async deletePrintTemplateContent(
    @graphql.Args() args: DeletePrintTemplateContentArgs
  ): Promise<PrintTemplateContent | null> {
    try {
      return await this.service.deletePrintTemplateContent(args);
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
  @graphql.ResolveField(() => PrintTemplate, {
    nullable: true,
    name: "printTemplateId",
  })
  @nestAccessControl.UseRoles({
    resource: "PrintTemplate",
    action: "read",
    possession: "any",
  })
  async getPrintTemplateId(
    @graphql.Parent() parent: PrintTemplateContent
  ): Promise<PrintTemplate | null> {
    const result = await this.service.getPrintTemplateId(parent.id);

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
    @graphql.Parent() parent: PrintTemplateContent
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
