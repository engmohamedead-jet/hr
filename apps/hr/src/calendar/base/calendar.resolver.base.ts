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
import { Calendar } from "./Calendar";
import { CalendarCountArgs } from "./CalendarCountArgs";
import { CalendarFindManyArgs } from "./CalendarFindManyArgs";
import { CalendarFindUniqueArgs } from "./CalendarFindUniqueArgs";
import { CreateCalendarArgs } from "./CreateCalendarArgs";
import { UpdateCalendarArgs } from "./UpdateCalendarArgs";
import { DeleteCalendarArgs } from "./DeleteCalendarArgs";
import { CalendarService } from "../calendar.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Calendar)
export class CalendarResolverBase {
  constructor(
    protected readonly service: CalendarService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Calendar",
    action: "read",
    possession: "any",
  })
  async _calendarsMeta(
    @graphql.Args() args: CalendarCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Calendar])
  @nestAccessControl.UseRoles({
    resource: "Calendar",
    action: "read",
    possession: "any",
  })
  async calendars(
    @graphql.Args() args: CalendarFindManyArgs
  ): Promise<Calendar[]> {
    return this.service.calendars(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Calendar, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Calendar",
    action: "read",
    possession: "own",
  })
  async calendar(
    @graphql.Args() args: CalendarFindUniqueArgs
  ): Promise<Calendar | null> {
    const result = await this.service.calendar(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Calendar)
  @nestAccessControl.UseRoles({
    resource: "Calendar",
    action: "create",
    possession: "any",
  })
  async createCalendar(
    @graphql.Args() args: CreateCalendarArgs
  ): Promise<Calendar> {
    return await this.service.createCalendar({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Calendar)
  @nestAccessControl.UseRoles({
    resource: "Calendar",
    action: "update",
    possession: "any",
  })
  async updateCalendar(
    @graphql.Args() args: UpdateCalendarArgs
  ): Promise<Calendar | null> {
    try {
      return await this.service.updateCalendar({
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

  @graphql.Mutation(() => Calendar)
  @nestAccessControl.UseRoles({
    resource: "Calendar",
    action: "delete",
    possession: "any",
  })
  async deleteCalendar(
    @graphql.Args() args: DeleteCalendarArgs
  ): Promise<Calendar | null> {
    try {
      return await this.service.deleteCalendar(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
