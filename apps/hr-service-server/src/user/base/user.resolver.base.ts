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
import { User } from "./User";
import { UserCountArgs } from "./UserCountArgs";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserFindUniqueArgs } from "./UserFindUniqueArgs";
import { CreateUserArgs } from "./CreateUserArgs";
import { UpdateUserArgs } from "./UpdateUserArgs";
import { DeleteUserArgs } from "./DeleteUserArgs";
import { AttendanceFindManyArgs } from "../../attendance/base/AttendanceFindManyArgs";
import { Attendance } from "../../attendance/base/Attendance";
import { BonusRequestFindManyArgs } from "../../bonusRequest/base/BonusRequestFindManyArgs";
import { BonusRequest } from "../../bonusRequest/base/BonusRequest";
import { CheckInOutFindManyArgs } from "../../checkInOut/base/CheckInOutFindManyArgs";
import { CheckInOut } from "../../checkInOut/base/CheckInOut";
import { DailyMovementRequestFindManyArgs } from "../../dailyMovementRequest/base/DailyMovementRequestFindManyArgs";
import { DailyMovementRequest } from "../../dailyMovementRequest/base/DailyMovementRequest";
import { DayOffRequestFindManyArgs } from "../../dayOffRequest/base/DayOffRequestFindManyArgs";
import { DayOffRequest } from "../../dayOffRequest/base/DayOffRequest";
import { LeaveRequestFindManyArgs } from "../../leaveRequest/base/LeaveRequestFindManyArgs";
import { LeaveRequest } from "../../leaveRequest/base/LeaveRequest";
import { OverNightRequestFindManyArgs } from "../../overNightRequest/base/OverNightRequestFindManyArgs";
import { OverNightRequest } from "../../overNightRequest/base/OverNightRequest";
import { UserService } from "../user.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => User)
export class UserResolverBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async _usersMeta(
    @graphql.Args() args: UserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.users(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.user(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.createUser({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.updateUser({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
    try {
      return await this.service.deleteUser(args);
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
  @graphql.ResolveField(() => [Attendance], { name: "attendances" })
  @nestAccessControl.UseRoles({
    resource: "Attendance",
    action: "read",
    possession: "any",
  })
  async findAttendances(
    @graphql.Parent() parent: User,
    @graphql.Args() args: AttendanceFindManyArgs
  ): Promise<Attendance[]> {
    const results = await this.service.findAttendances(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [BonusRequest], { name: "bonuses" })
  @nestAccessControl.UseRoles({
    resource: "BonusRequest",
    action: "read",
    possession: "any",
  })
  async findBonuses(
    @graphql.Parent() parent: User,
    @graphql.Args() args: BonusRequestFindManyArgs
  ): Promise<BonusRequest[]> {
    const results = await this.service.findBonuses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [CheckInOut], { name: "checkInOuts" })
  @nestAccessControl.UseRoles({
    resource: "CheckInOut",
    action: "read",
    possession: "any",
  })
  async findCheckInOuts(
    @graphql.Parent() parent: User,
    @graphql.Args() args: CheckInOutFindManyArgs
  ): Promise<CheckInOut[]> {
    const results = await this.service.findCheckInOuts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DailyMovementRequest], {
    name: "dailyMovements",
  })
  @nestAccessControl.UseRoles({
    resource: "DailyMovementRequest",
    action: "read",
    possession: "any",
  })
  async findDailyMovements(
    @graphql.Parent() parent: User,
    @graphql.Args() args: DailyMovementRequestFindManyArgs
  ): Promise<DailyMovementRequest[]> {
    const results = await this.service.findDailyMovements(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DayOffRequest], { name: "dayOffs" })
  @nestAccessControl.UseRoles({
    resource: "DayOffRequest",
    action: "read",
    possession: "any",
  })
  async findDayOffs(
    @graphql.Parent() parent: User,
    @graphql.Args() args: DayOffRequestFindManyArgs
  ): Promise<DayOffRequest[]> {
    const results = await this.service.findDayOffs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [LeaveRequest], { name: "leaveRequests" })
  @nestAccessControl.UseRoles({
    resource: "LeaveRequest",
    action: "read",
    possession: "any",
  })
  async findLeaveRequests(
    @graphql.Parent() parent: User,
    @graphql.Args() args: LeaveRequestFindManyArgs
  ): Promise<LeaveRequest[]> {
    const results = await this.service.findLeaveRequests(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [OverNightRequest], { name: "overNights" })
  @nestAccessControl.UseRoles({
    resource: "OverNightRequest",
    action: "read",
    possession: "any",
  })
  async findOverNights(
    @graphql.Parent() parent: User,
    @graphql.Args() args: OverNightRequestFindManyArgs
  ): Promise<OverNightRequest[]> {
    const results = await this.service.findOverNights(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}