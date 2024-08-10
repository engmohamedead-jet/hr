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
import { CurrencyService } from "../currency.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CurrencyCreateInput } from "./CurrencyCreateInput";
import { Currency } from "./Currency";
import { CurrencyFindManyArgs } from "./CurrencyFindManyArgs";
import { CurrencyWhereUniqueInput } from "./CurrencyWhereUniqueInput";
import { CurrencyUpdateInput } from "./CurrencyUpdateInput";
import { AccountFindManyArgs } from "../../account/base/AccountFindManyArgs";
import { Account } from "../../account/base/Account";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ExchangeRateDetailFindManyArgs } from "../../exchangeRateDetail/base/ExchangeRateDetailFindManyArgs";
import { ExchangeRateDetail } from "../../exchangeRateDetail/base/ExchangeRateDetail";
import { ExchangeRateDetailWhereUniqueInput } from "../../exchangeRateDetail/base/ExchangeRateDetailWhereUniqueInput";
import { SupplierFindManyArgs } from "../../supplier/base/SupplierFindManyArgs";
import { Supplier } from "../../supplier/base/Supplier";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CurrencyControllerBase {
  constructor(
    protected readonly service: CurrencyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Currency })
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCurrency(
    @common.Body() data: CurrencyCreateInput
  ): Promise<Currency> {
    return await this.service.createCurrency({
      data: {
        ...data,

        foreignCurrencyName: data.foreignCurrencyName
          ? {
              connect: data.foreignCurrencyName,
            }
          : undefined,
      },
      select: {
        code: true,
        createdAt: true,

        foreignCurrencyName: {
          select: {
            id: true,
          },
        },

        hundredthName: true,
        id: true,
        isDefault: true,
        name: true,
        normalizedName: true,
        note: true,
        symbolField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Currency] })
  @ApiNestedQuery(CurrencyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async currencies(@common.Req() request: Request): Promise<Currency[]> {
    const args = plainToClass(CurrencyFindManyArgs, request.query);
    return this.service.currencies({
      ...args,
      select: {
        code: true,
        createdAt: true,

        foreignCurrencyName: {
          select: {
            id: true,
          },
        },

        hundredthName: true,
        id: true,
        isDefault: true,
        name: true,
        normalizedName: true,
        note: true,
        symbolField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async currency(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    const result = await this.service.currency({
      where: params,
      select: {
        code: true,
        createdAt: true,

        foreignCurrencyName: {
          select: {
            id: true,
          },
        },

        hundredthName: true,
        id: true,
        isDefault: true,
        name: true,
        normalizedName: true,
        note: true,
        symbolField: true,
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
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCurrency(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() data: CurrencyUpdateInput
  ): Promise<Currency | null> {
    try {
      return await this.service.updateCurrency({
        where: params,
        data: {
          ...data,

          foreignCurrencyName: data.foreignCurrencyName
            ? {
                connect: data.foreignCurrencyName,
              }
            : undefined,
        },
        select: {
          code: true,
          createdAt: true,

          foreignCurrencyName: {
            select: {
              id: true,
            },
          },

          hundredthName: true,
          id: true,
          isDefault: true,
          name: true,
          normalizedName: true,
          note: true,
          symbolField: true,
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
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCurrency(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    try {
      return await this.service.deleteCurrency({
        where: params,
        select: {
          code: true,
          createdAt: true,

          foreignCurrencyName: {
            select: {
              id: true,
            },
          },

          hundredthName: true,
          id: true,
          isDefault: true,
          name: true,
          normalizedName: true,
          note: true,
          symbolField: true,
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
  @common.Get("/:id/accounts")
  @ApiNestedQuery(AccountFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async findAccounts(
    @common.Req() request: Request,
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Account[]> {
    const query = plainToClass(AccountFindManyArgs, request.query);
    const results = await this.service.findAccounts(params.id, {
      ...query,
      select: {
        accountCategory: {
          select: {
            id: true,
          },
        },

        accountNumber: true,

        accountTypeId: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        currencyId: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        isActive: true,
        isMasterAccount: true,
        isUnderRevision: true,
        name: true,
        normalizedName: true,
        note: true,
        parentAccountId: true,
        referenceNumber: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/accounts")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async connectAccounts(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        connect: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/accounts")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async updateAccounts(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        set: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/accounts")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async disconnectAccounts(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        disconnect: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
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
    @common.Param() params: CurrencyWhereUniqueInput
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
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async connectCustomers(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        connect: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customers")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async updateCustomers(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        set: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customers")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async disconnectCustomers(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        disconnect: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/exchangeRateDetails")
  @ApiNestedQuery(ExchangeRateDetailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ExchangeRateDetail",
    action: "read",
    possession: "any",
  })
  async findExchangeRateDetails(
    @common.Req() request: Request,
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<ExchangeRateDetail[]> {
    const query = plainToClass(ExchangeRateDetailFindManyArgs, request.query);
    const results = await this.service.findExchangeRateDetails(params.id, {
      ...query,
      select: {
        createdAt: true,
        exchangeRateDate: true,
        exchangeRateValue: true,

        foreignCurrencyId: {
          select: {
            id: true,
          },
        },

        id: true,

        localCurrencyId: {
          select: {
            id: true,
          },
        },

        unit: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/exchangeRateDetails")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async connectExchangeRateDetails(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: ExchangeRateDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exchangeRateDetails: {
        connect: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/exchangeRateDetails")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async updateExchangeRateDetails(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: ExchangeRateDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exchangeRateDetails: {
        set: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/exchangeRateDetails")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async disconnectExchangeRateDetails(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: ExchangeRateDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      exchangeRateDetails: {
        disconnect: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/suppliers")
  @ApiNestedQuery(SupplierFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "read",
    possession: "any",
  })
  async findSuppliers(
    @common.Req() request: Request,
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Supplier[]> {
    const query = plainToClass(SupplierFindManyArgs, request.query);
    const results = await this.service.findSuppliers(params.id, {
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

        debit: true,
        description: true,
        email: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        phoneNumber: true,
        updatedAt: true,
        website: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/suppliers")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async connectSuppliers(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: SupplierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      suppliers: {
        connect: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/suppliers")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async updateSuppliers(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: SupplierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      suppliers: {
        set: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/suppliers")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async disconnectSuppliers(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: SupplierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      suppliers: {
        disconnect: body,
      },
    };
    await this.service.updateCurrency({
      where: params,
      data,
      select: { id: true },
    });
  }
}