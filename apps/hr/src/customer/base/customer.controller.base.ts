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
import { CustomerService } from "../customer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CustomerCreateInput } from "./CustomerCreateInput";
import { Customer } from "./Customer";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerUpdateInput } from "./CustomerUpdateInput";
import { ProductionOrderFindManyArgs } from "../../productionOrder/base/ProductionOrderFindManyArgs";
import { ProductionOrder } from "../../productionOrder/base/ProductionOrder";
import { ProductionOrderWhereUniqueInput } from "../../productionOrder/base/ProductionOrderWhereUniqueInput";
import { ReceiptVoucherFindManyArgs } from "../../receiptVoucher/base/ReceiptVoucherFindManyArgs";
import { ReceiptVoucher } from "../../receiptVoucher/base/ReceiptVoucher";
import { ReceiptVoucherWhereUniqueInput } from "../../receiptVoucher/base/ReceiptVoucherWhereUniqueInput";
import { SaleOrderFindManyArgs } from "../../saleOrder/base/SaleOrderFindManyArgs";
import { SaleOrder } from "../../saleOrder/base/SaleOrder";
import { SaleOrderWhereUniqueInput } from "../../saleOrder/base/SaleOrderWhereUniqueInput";
import { SaleReturnFindManyArgs } from "../../saleReturn/base/SaleReturnFindManyArgs";
import { SaleReturn } from "../../saleReturn/base/SaleReturn";
import { SaleReturnWhereUniqueInput } from "../../saleReturn/base/SaleReturnWhereUniqueInput";
import { SaleFindManyArgs } from "../../sale/base/SaleFindManyArgs";
import { Sale } from "../../sale/base/Sale";
import { SaleWhereUniqueInput } from "../../sale/base/SaleWhereUniqueInput";
import { SupplierFindManyArgs } from "../../supplier/base/SupplierFindManyArgs";
import { Supplier } from "../../supplier/base/Supplier";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";
import { CustomerWhereInput } from "./CustomerWhereInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CustomerControllerBase {
  constructor(
    protected readonly service: CustomerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Customer })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCustomer(
    @common.Body() data: CustomerCreateInput
  ): Promise<Customer> {
    return await this.service.createCustomer({
      data: {
        ...data,

        currencyId: data.currencyId
          ? {
              connect: data.currencyId,
            }
          : undefined,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,
      },
      select: {
        DefaultSalePriceTypeId: true,
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
        firstBalance: true,
        firstBalanceDate: true,
        id: true,
        isActive: true,
        isSystem: true,
        isUnderRevision: true,
        maxAllowedDebit: true,
        name: true,
        normalizedName: true,
        phoneNumber: true,
        previousBalance: true,
        revisionDate: true,
        saleDiscountRate: true,
        supplierId: true,
        taxNumber: true,

        tenant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        website: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Customer] })
  @ApiNestedQuery(CustomerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customers(@common.Req() request: Request): Promise<Customer[]> {
    const args = plainToClass(CustomerFindManyArgs, request.query);
    return this.service.customers({
      ...args,
      select: {
        DefaultSalePriceTypeId: true,
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
        firstBalance: true,
        firstBalanceDate: true,
        id: true,
        isActive: true,
        isSystem: true,
        isUnderRevision: true,
        maxAllowedDebit: true,
        name: true,
        normalizedName: true,
        phoneNumber: true,
        previousBalance: true,
        revisionDate: true,
        saleDiscountRate: true,
        supplierId: true,
        taxNumber: true,

        tenant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        website: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customer(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    const result = await this.service.customer({
      where: params,
      select: {
        DefaultSalePriceTypeId: true,
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
        firstBalance: true,
        firstBalanceDate: true,
        id: true,
        isActive: true,
        isSystem: true,
        isUnderRevision: true,
        maxAllowedDebit: true,
        name: true,
        normalizedName: true,
        phoneNumber: true,
        previousBalance: true,
        revisionDate: true,
        saleDiscountRate: true,
        supplierId: true,
        taxNumber: true,

        tenant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        website: true,
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
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCustomer(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() data: CustomerUpdateInput
  ): Promise<Customer | null> {
    try {
      return await this.service.updateCustomer({
        where: params,
        data: {
          ...data,

          currencyId: data.currencyId
            ? {
                connect: data.currencyId,
              }
            : undefined,

          tenant: data.tenant
            ? {
                connect: data.tenant,
              }
            : undefined,
        },
        select: {
          DefaultSalePriceTypeId: true,
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
          firstBalance: true,
          firstBalanceDate: true,
          id: true,
          isActive: true,
          isSystem: true,
          isUnderRevision: true,
          maxAllowedDebit: true,
          name: true,
          normalizedName: true,
          phoneNumber: true,
          previousBalance: true,
          revisionDate: true,
          saleDiscountRate: true,
          supplierId: true,
          taxNumber: true,

          tenant: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          website: true,
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
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCustomer(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    try {
      return await this.service.deleteCustomer({
        where: params,
        select: {
          DefaultSalePriceTypeId: true,
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
          firstBalance: true,
          firstBalanceDate: true,
          id: true,
          isActive: true,
          isSystem: true,
          isUnderRevision: true,
          maxAllowedDebit: true,
          name: true,
          normalizedName: true,
          phoneNumber: true,
          previousBalance: true,
          revisionDate: true,
          saleDiscountRate: true,
          supplierId: true,
          taxNumber: true,

          tenant: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          website: true,
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
  @common.Get("/:id/productionOrders")
  @ApiNestedQuery(ProductionOrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProductionOrder",
    action: "read",
    possession: "any",
  })
  async findProductionOrders(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<ProductionOrder[]> {
    const query = plainToClass(ProductionOrderFindManyArgs, request.query);
    const results = await this.service.findProductionOrders(params.id, {
      ...query,
      select: {
        billOfMaterialId: {
          select: {
            id: true,
          },
        },

        code: true,
        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        deadlineDate: true,
        description: true,
        finishDate: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,
        orderDate: true,

        orderStatusId: {
          select: {
            id: true,
          },
        },

        productId: {
          select: {
            id: true,
          },
        },

        productQuantity: true,
        sequenceNumber: true,
        startDate: true,

        storeId: {
          select: {
            id: true,
          },
        },

        tenantId: {
          select: {
            id: true,
          },
        },

        unit: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/productionOrders")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectProductionOrders(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: ProductionOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productionOrders: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/productionOrders")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateProductionOrders(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: ProductionOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productionOrders: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/productionOrders")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectProductionOrders(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: ProductionOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productionOrders: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/receiptVouchers")
  @ApiNestedQuery(ReceiptVoucherFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ReceiptVoucher",
    action: "read",
    possession: "any",
  })
  async findReceiptVouchers(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<ReceiptVoucher[]> {
    const query = plainToClass(ReceiptVoucherFindManyArgs, request.query);
    const results = await this.service.findReceiptVouchers(params.id, {
      ...query,
      select: {
        accountTransactionId: {
          select: {
            id: true,
          },
        },

        amount: true,

        cashRepositoryId: {
          select: {
            id: true,
          },
        },

        chequeDueDate: true,
        chequeNumber: true,
        chequeValue: true,
        createdAt: true,

        currencyId: {
          select: {
            id: true,
          },
        },

        customerId: {
          select: {
            id: true,
          },
        },

        employeeId: {
          select: {
            id: true,
          },
        },

        id: true,
        isAcive: true,
        note: true,
        receiptVoucherDate: true,
        sequence: true,
        statementReference: true,

        tenant: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        voucherTypeId: {
          select: {
            id: true,
          },
        },

        wasChequePaid: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/receiptVouchers")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectReceiptVouchers(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: ReceiptVoucherWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      receiptVouchers: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/receiptVouchers")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateReceiptVouchers(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: ReceiptVoucherWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      receiptVouchers: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/receiptVouchers")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectReceiptVouchers(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: ReceiptVoucherWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      receiptVouchers: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/saleOrders")
  @ApiNestedQuery(SaleOrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "read",
    possession: "any",
  })
  async findSaleOrders(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<SaleOrder[]> {
    const query = plainToClass(SaleOrderFindManyArgs, request.query);
    const results = await this.service.findSaleOrders(params.id, {
      ...query,
      select: {
        billingAddress: true,

        cashRepositoryId: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        deliveryDate: true,
        discountTotal: true,
        expectedDeliveryDate: true,
        id: true,

        invoiceTypeId: {
          select: {
            id: true,
          },
        },

        isActive: true,
        isCancelled: true,
        isReplicated: true,
        netTotal: true,
        nonTaxableTotal: true,
        note: true,

        orderStatus: {
          select: {
            id: true,
          },
        },

        paymentStatus: {
          select: {
            id: true,
          },
        },

        paymentTypeId: {
          select: {
            id: true,
          },
        },

        referenceNumber: true,
        saleOrderDate: true,

        salePriceType: {
          select: {
            id: true,
          },
        },

        salePriceTypeId: true,

        saleQuotation: {
          select: {
            id: true,
          },
        },

        saleTotal: true,
        shippingAddress: true,
        shippingCost: true,

        shippingStatus: {
          select: {
            id: true,
          },
        },

        storeId: {
          select: {
            id: true,
          },
        },

        tax: true,
        taxRate: true,
        taxableTotal: true,

        tenant: {
          select: {
            id: true,
          },
        },

        transactionDateTime: true,
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

  @common.Post("/:id/saleOrders")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectSaleOrders(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: SaleOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleOrders: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/saleOrders")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateSaleOrders(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: SaleOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleOrders: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/saleOrders")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectSaleOrders(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: SaleOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleOrders: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/saleReturns")
  @ApiNestedQuery(SaleReturnFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SaleReturn",
    action: "read",
    possession: "any",
  })
  async findSaleReturns(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<SaleReturn[]> {
    const query = plainToClass(SaleReturnFindManyArgs, request.query);
    const results = await this.service.findSaleReturns(params.id, {
      ...query,
      select: {
        cashRepositoryId: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        discountTotal: true,
        id: true,

        invoiceTypeId: {
          select: {
            id: true,
          },
        },

        isActive: true,
        isCancelled: true,
        isReplicated: true,
        netTotal: true,
        nonTaxableTotal: true,
        note: true,
        paid: true,

        paymentTermId: {
          select: {
            id: true,
          },
        },

        paymentTypeId: {
          select: {
            id: true,
          },
        },

        referenceNumber: true,
        remaining: true,
        returnTotal: true,

        saleId: {
          select: {
            id: true,
          },
        },

        salePriceTyped: {
          select: {
            id: true,
          },
        },

        saleReturnDate: true,
        sequence: true,

        storeId: {
          select: {
            id: true,
          },
        },

        tax: true,
        taxRate: true,
        taxableTotal: true,

        tenant: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/saleReturns")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectSaleReturns(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: SaleReturnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleReturns: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/saleReturns")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateSaleReturns(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: SaleReturnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleReturns: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/saleReturns")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectSaleReturns(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: SaleReturnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleReturns: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/sales")
  @ApiNestedQuery(SaleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Sale",
    action: "read",
    possession: "any",
  })
  async findSales(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Sale[]> {
    const query = plainToClass(SaleFindManyArgs, request.query);
    const results = await this.service.findSales(params.id, {
      ...query,
      select: {
        cashRepositoryId: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        discountTotal: true,
        id: true,

        invoiceTypeId: {
          select: {
            id: true,
          },
        },

        isActive: true,
        isCancelled: true,
        isReplicated: true,
        netTotal: true,
        nonTaxableTotal: true,
        note: true,
        paid: true,

        paymentTerm: {
          select: {
            id: true,
          },
        },

        paymentTypeId: {
          select: {
            id: true,
          },
        },

        referenceNumber: true,
        remaining: true,
        saleDate: true,

        salePriceTypeId: {
          select: {
            id: true,
          },
        },

        saleTotal: true,
        sequenceNumber: true,

        storeId: {
          select: {
            id: true,
          },
        },

        tax: true,
        taxRate: true,
        taxableTotal: true,

        tenantId: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/sales")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectSales(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: SaleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sales: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sales")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateSales(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: SaleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sales: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sales")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectSales(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: SaleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sales: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
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
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Supplier[]> {
    const query = plainToClass(SupplierFindManyArgs, request.query);
    const results = await this.service.findSuppliers(params.id, {
      ...query,
      select: {
        address: true,
        code: true,
        createdAt: true,
        credit: true,

        currency: {
          select: {
            id: true,
          },
        },

        customerId: {
          select: {
            id: true,
          },
        },

        debit: true,
        description: true,
        email: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,
        phoneNumber: true,

        tenantId: {
          select: {
            id: true,
          },
        },

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
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async connectSuppliers(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: SupplierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      suppliers: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/suppliers")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateSuppliers(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: SupplierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      suppliers: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/suppliers")
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async disconnectSuppliers(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: SupplierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      suppliers: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/tenant/:tenantId/customers/:id")
  @swagger.ApiOkResponse({
    type: Customer,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetCustomerByTenantAndId(
    @common.Body()
    body: CustomerWhereInput
  ): Promise<Customer> {
    return this.service.GetCustomerByTenantAndId(body);
  }

  @common.Get("/tenant/:tenantId/customers")
  @swagger.ApiOkResponse({
    type: Customer,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetCustomersByTenant(
    @common.Body()
    body: CustomerWhereInput
  ): Promise<Customer[]> {
    return this.service.GetCustomersByTenant(body);
  }
}
