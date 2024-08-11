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
import { PaymentType } from "./PaymentType";
import { PaymentTypeCountArgs } from "./PaymentTypeCountArgs";
import { PaymentTypeFindManyArgs } from "./PaymentTypeFindManyArgs";
import { PaymentTypeFindUniqueArgs } from "./PaymentTypeFindUniqueArgs";
import { CreatePaymentTypeArgs } from "./CreatePaymentTypeArgs";
import { UpdatePaymentTypeArgs } from "./UpdatePaymentTypeArgs";
import { DeletePaymentTypeArgs } from "./DeletePaymentTypeArgs";
import { PaymentTypeService } from "../paymentType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentType)
export class PaymentTypeResolverBase {
  constructor(
    protected readonly service: PaymentTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "read",
    possession: "any",
  })
  async _paymentTypesMeta(
    @graphql.Args() args: PaymentTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PaymentType])
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "read",
    possession: "any",
  })
  async paymentTypes(
    @graphql.Args() args: PaymentTypeFindManyArgs
  ): Promise<PaymentType[]> {
    return this.service.paymentTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PaymentType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "read",
    possession: "own",
  })
  async paymentType(
    @graphql.Args() args: PaymentTypeFindUniqueArgs
  ): Promise<PaymentType | null> {
    const result = await this.service.paymentType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PaymentType)
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "create",
    possession: "any",
  })
  async createPaymentType(
    @graphql.Args() args: CreatePaymentTypeArgs
  ): Promise<PaymentType> {
    return await this.service.createPaymentType({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PaymentType)
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "update",
    possession: "any",
  })
  async updatePaymentType(
    @graphql.Args() args: UpdatePaymentTypeArgs
  ): Promise<PaymentType | null> {
    try {
      return await this.service.updatePaymentType({
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

  @graphql.Mutation(() => PaymentType)
  @nestAccessControl.UseRoles({
    resource: "PaymentType",
    action: "delete",
    possession: "any",
  })
  async deletePaymentType(
    @graphql.Args() args: DeletePaymentTypeArgs
  ): Promise<PaymentType | null> {
    try {
      return await this.service.deletePaymentType(args);
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