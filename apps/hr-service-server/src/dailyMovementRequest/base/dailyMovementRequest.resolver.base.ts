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
import { DailyMovementRequest } from "./DailyMovementRequest";
import { DailyMovementRequestCountArgs } from "./DailyMovementRequestCountArgs";
import { DailyMovementRequestFindManyArgs } from "./DailyMovementRequestFindManyArgs";
import { DailyMovementRequestFindUniqueArgs } from "./DailyMovementRequestFindUniqueArgs";
import { CreateDailyMovementRequestArgs } from "./CreateDailyMovementRequestArgs";
import { UpdateDailyMovementRequestArgs } from "./UpdateDailyMovementRequestArgs";
import { DeleteDailyMovementRequestArgs } from "./DeleteDailyMovementRequestArgs";
import { User } from "../../user/base/User";
import { Employee } from "../../employee/base/Employee";
import { Tenant } from "../../tenant/base/Tenant";
import { DailyMovementRequestService } from "../dailyMovementRequest.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DailyMovementRequest)
export class DailyMovementRequestResolverBase {
  constructor(
    protected readonly service: DailyMovementRequestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DailyMovementRequest",
    action: "read",
    possession: "any",
  })
  async _dailyMovementRequestsMeta(
    @graphql.Args() args: DailyMovementRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DailyMovementRequest])
  @nestAccessControl.UseRoles({
    resource: "DailyMovementRequest",
    action: "read",
    possession: "any",
  })
  async dailyMovementRequests(
    @graphql.Args() args: DailyMovementRequestFindManyArgs
  ): Promise<DailyMovementRequest[]> {
    return this.service.dailyMovementRequests(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DailyMovementRequest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DailyMovementRequest",
    action: "read",
    possession: "own",
  })
  async dailyMovementRequest(
    @graphql.Args() args: DailyMovementRequestFindUniqueArgs
  ): Promise<DailyMovementRequest | null> {
    const result = await this.service.dailyMovementRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DailyMovementRequest)
  @nestAccessControl.UseRoles({
    resource: "DailyMovementRequest",
    action: "create",
    possession: "any",
  })
  async createDailyMovementRequest(
    @graphql.Args() args: CreateDailyMovementRequestArgs
  ): Promise<DailyMovementRequest> {
    return await this.service.createDailyMovementRequest({
      ...args,
      data: {
        ...args.data,

        approvedByUserId: args.data.approvedByUserId
          ? {
              connect: args.data.approvedByUserId,
            }
          : undefined,

        employeeId: {
          connect: args.data.employeeId,
        },

        tenantId: args.data.tenantId
          ? {
              connect: args.data.tenantId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DailyMovementRequest)
  @nestAccessControl.UseRoles({
    resource: "DailyMovementRequest",
    action: "update",
    possession: "any",
  })
  async updateDailyMovementRequest(
    @graphql.Args() args: UpdateDailyMovementRequestArgs
  ): Promise<DailyMovementRequest | null> {
    try {
      return await this.service.updateDailyMovementRequest({
        ...args,
        data: {
          ...args.data,

          approvedByUserId: args.data.approvedByUserId
            ? {
                connect: args.data.approvedByUserId,
              }
            : undefined,

          employeeId: {
            connect: args.data.employeeId,
          },

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

  @graphql.Mutation(() => DailyMovementRequest)
  @nestAccessControl.UseRoles({
    resource: "DailyMovementRequest",
    action: "delete",
    possession: "any",
  })
  async deleteDailyMovementRequest(
    @graphql.Args() args: DeleteDailyMovementRequestArgs
  ): Promise<DailyMovementRequest | null> {
    try {
      return await this.service.deleteDailyMovementRequest(args);
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
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "approvedByUserId",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getApprovedByUserId(
    @graphql.Parent() parent: DailyMovementRequest
  ): Promise<User | null> {
    const result = await this.service.getApprovedByUserId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Employee, {
    nullable: true,
    name: "employeeId",
  })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async getEmployeeId(
    @graphql.Parent() parent: DailyMovementRequest
  ): Promise<Employee | null> {
    const result = await this.service.getEmployeeId(parent.id);

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
    @graphql.Parent() parent: DailyMovementRequest
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}