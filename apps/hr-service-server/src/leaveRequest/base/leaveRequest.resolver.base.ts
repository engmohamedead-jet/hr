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
import { LeaveRequest } from "./LeaveRequest";
import { LeaveRequestCountArgs } from "./LeaveRequestCountArgs";
import { LeaveRequestFindManyArgs } from "./LeaveRequestFindManyArgs";
import { LeaveRequestFindUniqueArgs } from "./LeaveRequestFindUniqueArgs";
import { CreateLeaveRequestArgs } from "./CreateLeaveRequestArgs";
import { UpdateLeaveRequestArgs } from "./UpdateLeaveRequestArgs";
import { DeleteLeaveRequestArgs } from "./DeleteLeaveRequestArgs";
import { User } from "../../user/base/User";
import { Employee } from "../../employee/base/Employee";
import { LeaveRequestType } from "../../leaveRequestType/base/LeaveRequestType";
import { Tenant } from "../../tenant/base/Tenant";
import { LeaveRequestService } from "../leaveRequest.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LeaveRequest)
export class LeaveRequestResolverBase {
  constructor(
    protected readonly service: LeaveRequestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LeaveRequest",
    action: "read",
    possession: "any",
  })
  async _leaveRequestsMeta(
    @graphql.Args() args: LeaveRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [LeaveRequest])
  @nestAccessControl.UseRoles({
    resource: "LeaveRequest",
    action: "read",
    possession: "any",
  })
  async leaveRequests(
    @graphql.Args() args: LeaveRequestFindManyArgs
  ): Promise<LeaveRequest[]> {
    return this.service.leaveRequests(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LeaveRequest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LeaveRequest",
    action: "read",
    possession: "own",
  })
  async leaveRequest(
    @graphql.Args() args: LeaveRequestFindUniqueArgs
  ): Promise<LeaveRequest | null> {
    const result = await this.service.leaveRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LeaveRequest)
  @nestAccessControl.UseRoles({
    resource: "LeaveRequest",
    action: "create",
    possession: "any",
  })
  async createLeaveRequest(
    @graphql.Args() args: CreateLeaveRequestArgs
  ): Promise<LeaveRequest> {
    return await this.service.createLeaveRequest({
      ...args,
      data: {
        ...args.data,

        approvedByUserId: args.data.approvedByUserId
          ? {
              connect: args.data.approvedByUserId,
            }
          : undefined,

        employee: {
          connect: args.data.employee,
        },

        leaveRequestTypeId: {
          connect: args.data.leaveRequestTypeId,
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
  @graphql.Mutation(() => LeaveRequest)
  @nestAccessControl.UseRoles({
    resource: "LeaveRequest",
    action: "update",
    possession: "any",
  })
  async updateLeaveRequest(
    @graphql.Args() args: UpdateLeaveRequestArgs
  ): Promise<LeaveRequest | null> {
    try {
      return await this.service.updateLeaveRequest({
        ...args,
        data: {
          ...args.data,

          approvedByUserId: args.data.approvedByUserId
            ? {
                connect: args.data.approvedByUserId,
              }
            : undefined,

          employee: {
            connect: args.data.employee,
          },

          leaveRequestTypeId: {
            connect: args.data.leaveRequestTypeId,
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

  @graphql.Mutation(() => LeaveRequest)
  @nestAccessControl.UseRoles({
    resource: "LeaveRequest",
    action: "delete",
    possession: "any",
  })
  async deleteLeaveRequest(
    @graphql.Args() args: DeleteLeaveRequestArgs
  ): Promise<LeaveRequest | null> {
    try {
      return await this.service.deleteLeaveRequest(args);
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
    @graphql.Parent() parent: LeaveRequest
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
    name: "employee",
  })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async getEmployee(
    @graphql.Parent() parent: LeaveRequest
  ): Promise<Employee | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => LeaveRequestType, {
    nullable: true,
    name: "leaveRequestTypeId",
  })
  @nestAccessControl.UseRoles({
    resource: "LeaveRequestType",
    action: "read",
    possession: "any",
  })
  async getLeaveRequestTypeId(
    @graphql.Parent() parent: LeaveRequest
  ): Promise<LeaveRequestType | null> {
    const result = await this.service.getLeaveRequestTypeId(parent.id);

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
    @graphql.Parent() parent: LeaveRequest
  ): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
