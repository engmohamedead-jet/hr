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
import { AttributeValue } from "./AttributeValue";
import { AttributeValueCountArgs } from "./AttributeValueCountArgs";
import { AttributeValueFindManyArgs } from "./AttributeValueFindManyArgs";
import { AttributeValueFindUniqueArgs } from "./AttributeValueFindUniqueArgs";
import { CreateAttributeValueArgs } from "./CreateAttributeValueArgs";
import { UpdateAttributeValueArgs } from "./UpdateAttributeValueArgs";
import { DeleteAttributeValueArgs } from "./DeleteAttributeValueArgs";
import { Attribute } from "../../attribute/base/Attribute";
import { AttributeValueService } from "../attributeValue.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AttributeValue)
export class AttributeValueResolverBase {
  constructor(
    protected readonly service: AttributeValueService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "read",
    possession: "any",
  })
  async _attributeValuesMeta(
    @graphql.Args() args: AttributeValueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AttributeValue])
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "read",
    possession: "any",
  })
  async attributeValues(
    @graphql.Args() args: AttributeValueFindManyArgs
  ): Promise<AttributeValue[]> {
    return this.service.attributeValues(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AttributeValue, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "read",
    possession: "own",
  })
  async attributeValue(
    @graphql.Args() args: AttributeValueFindUniqueArgs
  ): Promise<AttributeValue | null> {
    const result = await this.service.attributeValue(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AttributeValue)
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "create",
    possession: "any",
  })
  async createAttributeValue(
    @graphql.Args() args: CreateAttributeValueArgs
  ): Promise<AttributeValue> {
    return await this.service.createAttributeValue({
      ...args,
      data: {
        ...args.data,

        attributeId: args.data.attributeId
          ? {
              connect: args.data.attributeId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AttributeValue)
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "update",
    possession: "any",
  })
  async updateAttributeValue(
    @graphql.Args() args: UpdateAttributeValueArgs
  ): Promise<AttributeValue | null> {
    try {
      return await this.service.updateAttributeValue({
        ...args,
        data: {
          ...args.data,

          attributeId: args.data.attributeId
            ? {
                connect: args.data.attributeId,
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

  @graphql.Mutation(() => AttributeValue)
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "delete",
    possession: "any",
  })
  async deleteAttributeValue(
    @graphql.Args() args: DeleteAttributeValueArgs
  ): Promise<AttributeValue | null> {
    try {
      return await this.service.deleteAttributeValue(args);
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
  @graphql.ResolveField(() => Attribute, {
    nullable: true,
    name: "attributeId",
  })
  @nestAccessControl.UseRoles({
    resource: "Attribute",
    action: "read",
    possession: "any",
  })
  async getAttributeId(
    @graphql.Parent() parent: AttributeValue
  ): Promise<Attribute | null> {
    const result = await this.service.getAttributeId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}