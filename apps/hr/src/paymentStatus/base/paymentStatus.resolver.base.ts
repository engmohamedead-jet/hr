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
import { PaymentStatus } from "./PaymentStatus";
import { PaymentStatusCountArgs } from "./PaymentStatusCountArgs";
import { PaymentStatusFindManyArgs } from "./PaymentStatusFindManyArgs";
import { PaymentStatusFindUniqueArgs } from "./PaymentStatusFindUniqueArgs";
import { CreatePaymentStatusArgs } from "./CreatePaymentStatusArgs";
import { UpdatePaymentStatusArgs } from "./UpdatePaymentStatusArgs";
import { DeletePaymentStatusArgs } from "./DeletePaymentStatusArgs";
import { SaleOrder } from "../../saleOrder/base/SaleOrder";
import { Tenant } from "../../tenant/base/Tenant";
import { PaymentStatusService } from "../paymentStatus.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentStatus)
export class PaymentStatusResolverBase {
  constructor(
    protected readonly service: PaymentStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PaymentStatus",
    action: "read",
    possession: "any",
  })
  async _paymentStatusesMeta(
    @graphql.Args() args: PaymentStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PaymentStatus])
  @nestAccessControl.UseRoles({
    resource: "PaymentStatus",
    action: "read",
    possession: "any",
  })
  async paymentStatuses(
    @graphql.Args() args: PaymentStatusFindManyArgs
  ): Promise<PaymentStatus[]> {
    return this.service.paymentStatuses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PaymentStatus, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PaymentStatus",
    action: "read",
    possession: "own",
  })
  async paymentStatus(
    @graphql.Args() args: PaymentStatusFindUniqueArgs
  ): Promise<PaymentStatus | null> {
    const result = await this.service.paymentStatus(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PaymentStatus)
  @nestAccessControl.UseRoles({
    resource: "PaymentStatus",
    action: "create",
    possession: "any",
  })
  async createPaymentStatus(
    @graphql.Args() args: CreatePaymentStatusArgs
  ): Promise<PaymentStatus> {
    return await this.service.createPaymentStatus({
      ...args,
      data: {
        ...args.data,

        saleOrders: args.data.saleOrders
          ? {
              connect: args.data.saleOrders,
            }
          : undefined,

        tenant: args.data.tenant
          ? {
              connect: args.data.tenant,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PaymentStatus)
  @nestAccessControl.UseRoles({
    resource: "PaymentStatus",
    action: "update",
    possession: "any",
  })
  async updatePaymentStatus(
    @graphql.Args() args: UpdatePaymentStatusArgs
  ): Promise<PaymentStatus | null> {
    try {
      return await this.service.updatePaymentStatus({
        ...args,
        data: {
          ...args.data,

          saleOrders: args.data.saleOrders
            ? {
                connect: args.data.saleOrders,
              }
            : undefined,

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

  @graphql.Mutation(() => PaymentStatus)
  @nestAccessControl.UseRoles({
    resource: "PaymentStatus",
    action: "delete",
    possession: "any",
  })
  async deletePaymentStatus(
    @graphql.Args() args: DeletePaymentStatusArgs
  ): Promise<PaymentStatus | null> {
    try {
      return await this.service.deletePaymentStatus(args);
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
  @graphql.ResolveField(() => SaleOrder, {
    nullable: true,
    name: "saleOrders",
  })
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "read",
    possession: "any",
  })
  async getSaleOrders(
    @graphql.Parent() parent: PaymentStatus
  ): Promise<SaleOrder | null> {
    const result = await this.service.getSaleOrders(parent.id);

    if (!result) {
      return null;
    }
    return result;
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
    @graphql.Parent() parent: PaymentStatus
  ): Promise<Tenant | null> {
    const result = await this.service.getTenant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
