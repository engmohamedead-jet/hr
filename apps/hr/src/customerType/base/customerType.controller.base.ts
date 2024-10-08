/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CustomerTypeService } from "../customerType.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CustomerTypeCreateInput } from "./CustomerTypeCreateInput";
import { CustomerType } from "./CustomerType";
import { CustomerTypeFindManyArgs } from "./CustomerTypeFindManyArgs";
import { CustomerTypeWhereUniqueInput } from "./CustomerTypeWhereUniqueInput";
import { CustomerTypeUpdateInput } from "./CustomerTypeUpdateInput";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CustomerTypeControllerBase {
  constructor(
    protected readonly service: CustomerTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CustomerType })
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCustomerType(
    @common.Body() data: CustomerTypeCreateInput
  ): Promise<CustomerType> {
    return await this.service.createCustomerType({
      data: data,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CustomerType] })
  @ApiNestedQuery(CustomerTypeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customerTypes(@common.Req() request: Request): Promise<CustomerType[]> {
    const args = plainToClass(CustomerTypeFindManyArgs, request.query);
    return this.service.customerTypes({
      ...args,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CustomerType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customerType(
    @common.Param() params: CustomerTypeWhereUniqueInput
  ): Promise<CustomerType | null> {
    const result = await this.service.customerType({
      where: params,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CustomerType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCustomerType(
    @common.Param() params: CustomerTypeWhereUniqueInput,
    @common.Body() data: CustomerTypeUpdateInput
  ): Promise<CustomerType | null> {
    try {
      return await this.service.updateCustomerType({
        where: params,
        data: data,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          normalizedName: true,
          note: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CustomerType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCustomerType(
    @common.Param() params: CustomerTypeWhereUniqueInput
  ): Promise<CustomerType | null> {
    try {
      return await this.service.deleteCustomerType({
        where: params,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          normalizedName: true,
          note: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/customers")
  @ApiNestedQuery(CustomerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async findCustomers(
    @common.Req() request: Request,
    @common.Param() params: CustomerTypeWhereUniqueInput
  ): Promise<Customer[]> {
    const query = plainToClass(CustomerFindManyArgs, request.query);
    const results = await this.service.findCustomers(params.id, {
      ...query,
      select: {
        address: true,
        code: true,
        createdAt: true,
        credit: true,

        currencyId: {
          select: {
            id: true,
          },
        },

        customerCateogryId: {
          select: {
            id: true,
          },
        },

        customerTypeId: {
          select: {
            id: true,
          },
        },

        debit: true,
        description: true,
        email: true,
        firstBalance: true,
        firstBalanceDate: true,
        guarantorAddress: true,
        guarantorJobTitle: true,
        guarantorName: true,
        guarantorNationalIdNumber: true,
        guarantorPhoneNumber: true,

        guarantorRatingId: {
          select: {
            id: true,
          },
        },

        guarantorWorkAddress: true,
        hasMortalOrDiscount: true,
        hasNoPendingInvoices: true,
        id: true,
        isActive: true,
        isComplain: true,
        isSystem: true,
        isUnderRevision: true,
        jobTitle: true,
        maxAllowedDebit: true,
        name: true,
        normalizedName: true,
        note: true,
        phoneNumber: true,
        previousBalance: true,

        rating: {
          select: {
            id: true,
          },
        },

        revisionDate: true,
        saleDiscountRate: true,

        salePriceTypeId: {
          select: {
            id: true,
          },
        },

        supplierId: {
          select: {
            id: true,
          },
        },

        taxNumber: true,
        updatedAt: true,
        website: true,
        workAddress: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/customers")
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "update",
    possession: "any",
  })
  async connectCustomers(
    @common.Param() params: CustomerTypeWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        connect: body,
      },
    };
    await this.service.updateCustomerType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customers")
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "update",
    possession: "any",
  })
  async updateCustomers(
    @common.Param() params: CustomerTypeWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        set: body,
      },
    };
    await this.service.updateCustomerType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customers")
  @nestAccessControl.UseRoles({
    resource: "CustomerType",
    action: "update",
    possession: "any",
  })
  async disconnectCustomers(
    @common.Param() params: CustomerTypeWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        disconnect: body,
      },
    };
    await this.service.updateCustomerType({
      where: params,
      data,
      select: { id: true },
    });
  }
}
