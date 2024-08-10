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
import { BankType } from "./BankType";
import { BankTypeCountArgs } from "./BankTypeCountArgs";
import { BankTypeFindManyArgs } from "./BankTypeFindManyArgs";
import { BankTypeFindUniqueArgs } from "./BankTypeFindUniqueArgs";
import { CreateBankTypeArgs } from "./CreateBankTypeArgs";
import { UpdateBankTypeArgs } from "./UpdateBankTypeArgs";
import { DeleteBankTypeArgs } from "./DeleteBankTypeArgs";
import { BankTypeService } from "../bankType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BankType)
export class BankTypeResolverBase {
  constructor(
    protected readonly service: BankTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BankType",
    action: "read",
    possession: "any",
  })
  async _bankTypesMeta(
    @graphql.Args() args: BankTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BankType])
  @nestAccessControl.UseRoles({
    resource: "BankType",
    action: "read",
    possession: "any",
  })
  async bankTypes(
    @graphql.Args() args: BankTypeFindManyArgs
  ): Promise<BankType[]> {
    return this.service.bankTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BankType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BankType",
    action: "read",
    possession: "own",
  })
  async bankType(
    @graphql.Args() args: BankTypeFindUniqueArgs
  ): Promise<BankType | null> {
    const result = await this.service.bankType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BankType)
  @nestAccessControl.UseRoles({
    resource: "BankType",
    action: "create",
    possession: "any",
  })
  async createBankType(
    @graphql.Args() args: CreateBankTypeArgs
  ): Promise<BankType> {
    return await this.service.createBankType({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BankType)
  @nestAccessControl.UseRoles({
    resource: "BankType",
    action: "update",
    possession: "any",
  })
  async updateBankType(
    @graphql.Args() args: UpdateBankTypeArgs
  ): Promise<BankType | null> {
    try {
      return await this.service.updateBankType({
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

  @graphql.Mutation(() => BankType)
  @nestAccessControl.UseRoles({
    resource: "BankType",
    action: "delete",
    possession: "any",
  })
  async deleteBankType(
    @graphql.Args() args: DeleteBankTypeArgs
  ): Promise<BankType | null> {
    try {
      return await this.service.deleteBankType(args);
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
