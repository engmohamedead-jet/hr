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
import { DoorType } from "./DoorType";
import { DoorTypeCountArgs } from "./DoorTypeCountArgs";
import { DoorTypeFindManyArgs } from "./DoorTypeFindManyArgs";
import { DoorTypeFindUniqueArgs } from "./DoorTypeFindUniqueArgs";
import { CreateDoorTypeArgs } from "./CreateDoorTypeArgs";
import { UpdateDoorTypeArgs } from "./UpdateDoorTypeArgs";
import { DeleteDoorTypeArgs } from "./DeleteDoorTypeArgs";
import { ElevatorFindManyArgs } from "../../elevator/base/ElevatorFindManyArgs";
import { Elevator } from "../../elevator/base/Elevator";
import { DoorTypeService } from "../doorType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DoorType)
export class DoorTypeResolverBase {
  constructor(
    protected readonly service: DoorTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "read",
    possession: "any",
  })
  async _doorTypesMeta(
    @graphql.Args() args: DoorTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DoorType])
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "read",
    possession: "any",
  })
  async doorTypes(
    @graphql.Args() args: DoorTypeFindManyArgs
  ): Promise<DoorType[]> {
    return this.service.doorTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DoorType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "read",
    possession: "own",
  })
  async doorType(
    @graphql.Args() args: DoorTypeFindUniqueArgs
  ): Promise<DoorType | null> {
    const result = await this.service.doorType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DoorType)
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "create",
    possession: "any",
  })
  async createDoorType(
    @graphql.Args() args: CreateDoorTypeArgs
  ): Promise<DoorType> {
    return await this.service.createDoorType({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DoorType)
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "update",
    possession: "any",
  })
  async updateDoorType(
    @graphql.Args() args: UpdateDoorTypeArgs
  ): Promise<DoorType | null> {
    try {
      return await this.service.updateDoorType({
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

  @graphql.Mutation(() => DoorType)
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "delete",
    possession: "any",
  })
  async deleteDoorType(
    @graphql.Args() args: DeleteDoorTypeArgs
  ): Promise<DoorType | null> {
    try {
      return await this.service.deleteDoorType(args);
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
  @graphql.ResolveField(() => [Elevator], { name: "elevators" })
  @nestAccessControl.UseRoles({
    resource: "Elevator",
    action: "read",
    possession: "any",
  })
  async findElevators(
    @graphql.Parent() parent: DoorType,
    @graphql.Args() args: ElevatorFindManyArgs
  ): Promise<Elevator[]> {
    const results = await this.service.findElevators(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}