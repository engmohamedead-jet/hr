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
import { CustomerElevator } from "./CustomerElevator";
import { CustomerElevatorCountArgs } from "./CustomerElevatorCountArgs";
import { CustomerElevatorFindManyArgs } from "./CustomerElevatorFindManyArgs";
import { CustomerElevatorFindUniqueArgs } from "./CustomerElevatorFindUniqueArgs";
import { CreateCustomerElevatorArgs } from "./CreateCustomerElevatorArgs";
import { UpdateCustomerElevatorArgs } from "./UpdateCustomerElevatorArgs";
import { DeleteCustomerElevatorArgs } from "./DeleteCustomerElevatorArgs";
import { FailureReportingFindManyArgs } from "../../failureReporting/base/FailureReportingFindManyArgs";
import { FailureReporting } from "../../failureReporting/base/FailureReporting";
import { InstallationContractFindManyArgs } from "../../installationContract/base/InstallationContractFindManyArgs";
import { InstallationContract } from "../../installationContract/base/InstallationContract";
import { PeriodicMaintenanceOrderFindManyArgs } from "../../periodicMaintenanceOrder/base/PeriodicMaintenanceOrderFindManyArgs";
import { PeriodicMaintenanceOrder } from "../../periodicMaintenanceOrder/base/PeriodicMaintenanceOrder";
import { Elevator } from "../../elevator/base/Elevator";
import { Store } from "../../store/base/Store";
import { CustomerElevatorService } from "../customerElevator.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerElevator)
export class CustomerElevatorResolverBase {
  constructor(
    protected readonly service: CustomerElevatorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CustomerElevator",
    action: "read",
    possession: "any",
  })
  async _customerElevatorsMeta(
    @graphql.Args() args: CustomerElevatorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CustomerElevator])
  @nestAccessControl.UseRoles({
    resource: "CustomerElevator",
    action: "read",
    possession: "any",
  })
  async customerElevators(
    @graphql.Args() args: CustomerElevatorFindManyArgs
  ): Promise<CustomerElevator[]> {
    return this.service.customerElevators(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CustomerElevator, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CustomerElevator",
    action: "read",
    possession: "own",
  })
  async customerElevator(
    @graphql.Args() args: CustomerElevatorFindUniqueArgs
  ): Promise<CustomerElevator | null> {
    const result = await this.service.customerElevator(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CustomerElevator)
  @nestAccessControl.UseRoles({
    resource: "CustomerElevator",
    action: "create",
    possession: "any",
  })
  async createCustomerElevator(
    @graphql.Args() args: CreateCustomerElevatorArgs
  ): Promise<CustomerElevator> {
    return await this.service.createCustomerElevator({
      ...args,
      data: {
        ...args.data,

        elevatorId: {
          connect: args.data.elevatorId,
        },

        storeId: {
          connect: args.data.storeId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CustomerElevator)
  @nestAccessControl.UseRoles({
    resource: "CustomerElevator",
    action: "update",
    possession: "any",
  })
  async updateCustomerElevator(
    @graphql.Args() args: UpdateCustomerElevatorArgs
  ): Promise<CustomerElevator | null> {
    try {
      return await this.service.updateCustomerElevator({
        ...args,
        data: {
          ...args.data,

          elevatorId: {
            connect: args.data.elevatorId,
          },

          storeId: {
            connect: args.data.storeId,
          },
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

  @graphql.Mutation(() => CustomerElevator)
  @nestAccessControl.UseRoles({
    resource: "CustomerElevator",
    action: "delete",
    possession: "any",
  })
  async deleteCustomerElevator(
    @graphql.Args() args: DeleteCustomerElevatorArgs
  ): Promise<CustomerElevator | null> {
    try {
      return await this.service.deleteCustomerElevator(args);
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
  @graphql.ResolveField(() => [FailureReporting], { name: "failureReportings" })
  @nestAccessControl.UseRoles({
    resource: "FailureReporting",
    action: "read",
    possession: "any",
  })
  async findFailureReportings(
    @graphql.Parent() parent: CustomerElevator,
    @graphql.Args() args: FailureReportingFindManyArgs
  ): Promise<FailureReporting[]> {
    const results = await this.service.findFailureReportings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [InstallationContract], {
    name: "installationContracts",
  })
  @nestAccessControl.UseRoles({
    resource: "InstallationContract",
    action: "read",
    possession: "any",
  })
  async findInstallationContracts(
    @graphql.Parent() parent: CustomerElevator,
    @graphql.Args() args: InstallationContractFindManyArgs
  ): Promise<InstallationContract[]> {
    const results = await this.service.findInstallationContracts(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PeriodicMaintenanceOrder], {
    name: "periodicMaintenanceOrders",
  })
  @nestAccessControl.UseRoles({
    resource: "PeriodicMaintenanceOrder",
    action: "read",
    possession: "any",
  })
  async findPeriodicMaintenanceOrders(
    @graphql.Parent() parent: CustomerElevator,
    @graphql.Args() args: PeriodicMaintenanceOrderFindManyArgs
  ): Promise<PeriodicMaintenanceOrder[]> {
    const results = await this.service.findPeriodicMaintenanceOrders(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Elevator, {
    nullable: true,
    name: "elevatorId",
  })
  @nestAccessControl.UseRoles({
    resource: "Elevator",
    action: "read",
    possession: "any",
  })
  async getElevatorId(
    @graphql.Parent() parent: CustomerElevator
  ): Promise<Elevator | null> {
    const result = await this.service.getElevatorId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Store, {
    nullable: true,
    name: "storeId",
  })
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "read",
    possession: "any",
  })
  async getStoreId(
    @graphql.Parent() parent: CustomerElevator
  ): Promise<Store | null> {
    const result = await this.service.getStoreId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
