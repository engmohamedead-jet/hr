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
import { Application } from "./Application";
import { ApplicationCountArgs } from "./ApplicationCountArgs";
import { ApplicationFindManyArgs } from "./ApplicationFindManyArgs";
import { ApplicationFindUniqueArgs } from "./ApplicationFindUniqueArgs";
import { CreateApplicationArgs } from "./CreateApplicationArgs";
import { UpdateApplicationArgs } from "./UpdateApplicationArgs";
import { DeleteApplicationArgs } from "./DeleteApplicationArgs";
import { ApplicationDependency } from "../../applicationDependency/base/ApplicationDependency";
import { Tenant } from "../../tenant/base/Tenant";
import { ApplicationService } from "../application.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Application)
export class ApplicationResolverBase {
  constructor(
    protected readonly service: ApplicationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "read",
    possession: "any",
  })
  async _applicationsMeta(
    @graphql.Args() args: ApplicationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Application])
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "read",
    possession: "any",
  })
  async applications(
    @graphql.Args() args: ApplicationFindManyArgs
  ): Promise<Application[]> {
    return this.service.applications(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Application, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "read",
    possession: "own",
  })
  async application(
    @graphql.Args() args: ApplicationFindUniqueArgs
  ): Promise<Application | null> {
    const result = await this.service.application(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Application)
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "create",
    possession: "any",
  })
  async createApplication(
    @graphql.Args() args: CreateApplicationArgs
  ): Promise<Application> {
    return await this.service.createApplication({
      ...args,
      data: {
        ...args.data,

        DependsOnApplicationDependency: args.data.DependsOnApplicationDependency
          ? {
              connect: args.data.DependsOnApplicationDependency,
            }
          : undefined,

        applicationDependency: args.data.applicationDependency
          ? {
              connect: args.data.applicationDependency,
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
  @graphql.Mutation(() => Application)
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "update",
    possession: "any",
  })
  async updateApplication(
    @graphql.Args() args: UpdateApplicationArgs
  ): Promise<Application | null> {
    try {
      return await this.service.updateApplication({
        ...args,
        data: {
          ...args.data,

          DependsOnApplicationDependency: args.data
            .DependsOnApplicationDependency
            ? {
                connect: args.data.DependsOnApplicationDependency,
              }
            : undefined,

          applicationDependency: args.data.applicationDependency
            ? {
                connect: args.data.applicationDependency,
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

  @graphql.Mutation(() => Application)
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "delete",
    possession: "any",
  })
  async deleteApplication(
    @graphql.Args() args: DeleteApplicationArgs
  ): Promise<Application | null> {
    try {
      return await this.service.deleteApplication(args);
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
  @graphql.ResolveField(() => ApplicationDependency, {
    nullable: true,
    name: "dependsOnApplicationDependency",
  })
  @nestAccessControl.UseRoles({
    resource: "ApplicationDependency",
    action: "read",
    possession: "any",
  })
  async getDependsOnApplicationDependency(
    @graphql.Parent() parent: Application
  ): Promise<ApplicationDependency | null> {
    const result = await this.service.getDependsOnApplicationDependency(
      parent.id
    );

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ApplicationDependency, {
    nullable: true,
    name: "applicationDependency",
  })
  @nestAccessControl.UseRoles({
    resource: "ApplicationDependency",
    action: "read",
    possession: "any",
  })
  async getApplicationDependency(
    @graphql.Parent() parent: Application
  ): Promise<ApplicationDependency | null> {
    const result = await this.service.getApplicationDependency(parent.id);

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
    @graphql.Parent() parent: Application
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}