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
import { PaymentMethod } from "./PaymentMethod";
import { PaymentMethodCountArgs } from "./PaymentMethodCountArgs";
import { PaymentMethodFindManyArgs } from "./PaymentMethodFindManyArgs";
import { PaymentMethodFindUniqueArgs } from "./PaymentMethodFindUniqueArgs";
import { CreatePaymentMethodArgs } from "./CreatePaymentMethodArgs";
import { UpdatePaymentMethodArgs } from "./UpdatePaymentMethodArgs";
import { DeletePaymentMethodArgs } from "./DeletePaymentMethodArgs";
import { SalePaymentFindManyArgs } from "../../salePayment/base/SalePaymentFindManyArgs";
import { SalePayment } from "../../salePayment/base/SalePayment";
import { Tenant } from "../../tenant/base/Tenant";
import { PaymentMethodService } from "../paymentMethod.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentMethod)
export class PaymentMethodResolverBase {
  constructor(
    protected readonly service: PaymentMethodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PaymentMethod",
    action: "read",
    possession: "any",
  })
  async _paymentMethodsMeta(
    @graphql.Args() args: PaymentMethodCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PaymentMethod])
  @nestAccessControl.UseRoles({
    resource: "PaymentMethod",
    action: "read",
    possession: "any",
  })
  async paymentMethods(
    @graphql.Args() args: PaymentMethodFindManyArgs
  ): Promise<PaymentMethod[]> {
    return this.service.paymentMethods(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PaymentMethod, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PaymentMethod",
    action: "read",
    possession: "own",
  })
  async paymentMethod(
    @graphql.Args() args: PaymentMethodFindUniqueArgs
  ): Promise<PaymentMethod | null> {
    const result = await this.service.paymentMethod(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PaymentMethod)
  @nestAccessControl.UseRoles({
    resource: "PaymentMethod",
    action: "create",
    possession: "any",
  })
  async createPaymentMethod(
    @graphql.Args() args: CreatePaymentMethodArgs
  ): Promise<PaymentMethod> {
    return await this.service.createPaymentMethod({
      ...args,
      data: {
        ...args.data,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PaymentMethod)
  @nestAccessControl.UseRoles({
    resource: "PaymentMethod",
    action: "update",
    possession: "any",
  })
  async updatePaymentMethod(
    @graphql.Args() args: UpdatePaymentMethodArgs
  ): Promise<PaymentMethod | null> {
    try {
      return await this.service.updatePaymentMethod({
        ...args,
        data: {
          ...args.data,

          tenant: args.data.tenant
            ? {
                connect: args.data.tenant,
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

  @graphql.Mutation(() => PaymentMethod)
  @nestAccessControl.UseRoles({
    resource: "PaymentMethod",
    action: "delete",
    possession: "any",
  })
  async deletePaymentMethod(
    @graphql.Args() args: DeletePaymentMethodArgs
  ): Promise<PaymentMethod | null> {
    try {
      return await this.service.deletePaymentMethod(args);
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
  @graphql.ResolveField(() => [SalePayment], { name: "salePayments" })
  @nestAccessControl.UseRoles({
    resource: "SalePayment",
    action: "read",
    possession: "any",
  })
  async findSalePayments(
    @graphql.Parent() parent: PaymentMethod,
    @graphql.Args() args: SalePaymentFindManyArgs
  ): Promise<SalePayment[]> {
    const results = await this.service.findSalePayments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenant",
  })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "any",
  })
  async getTenant(
    @graphql.Parent() parent: PaymentMethod
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
