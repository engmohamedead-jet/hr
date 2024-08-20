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
import { CashRepositoryService } from "../cashRepository.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CashRepositoryCreateInput } from "./CashRepositoryCreateInput";
import { CashRepository } from "./CashRepository";
import { CashRepositoryFindManyArgs } from "./CashRepositoryFindManyArgs";
import { CashRepositoryWhereUniqueInput } from "./CashRepositoryWhereUniqueInput";
import { CashRepositoryUpdateInput } from "./CashRepositoryUpdateInput";
import { PurchaseReturnFindManyArgs } from "../../purchaseReturn/base/PurchaseReturnFindManyArgs";
import { PurchaseReturn } from "../../purchaseReturn/base/PurchaseReturn";
import { PurchaseReturnWhereUniqueInput } from "../../purchaseReturn/base/PurchaseReturnWhereUniqueInput";
import { SaleOrderFindManyArgs } from "../../saleOrder/base/SaleOrderFindManyArgs";
import { SaleOrder } from "../../saleOrder/base/SaleOrder";
import { SaleOrderWhereUniqueInput } from "../../saleOrder/base/SaleOrderWhereUniqueInput";
import { SaleReturnFindManyArgs } from "../../saleReturn/base/SaleReturnFindManyArgs";
import { SaleReturn } from "../../saleReturn/base/SaleReturn";
import { SaleReturnWhereUniqueInput } from "../../saleReturn/base/SaleReturnWhereUniqueInput";
import { SaleFindManyArgs } from "../../sale/base/SaleFindManyArgs";
import { Sale } from "../../sale/base/Sale";
import { SaleWhereUniqueInput } from "../../sale/base/SaleWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CashRepositoryControllerBase {
  constructor(
    protected readonly service: CashRepositoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CashRepository })
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCashRepository(
    @common.Body() data: CashRepositoryCreateInput
  ): Promise<CashRepository> {
    return await this.service.createCashRepository({
      data: {
        ...data,

        parentCashRepositoryId: data.parentCashRepositoryId
          ? {
              connect: data.parentCashRepositoryId,
            }
          : undefined,

        purchases: data.purchases
          ? {
              connect: data.purchases,
            }
          : undefined,

        tenantId: data.tenantId
          ? {
              connect: data.tenantId,
            }
          : undefined,
      },
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,

        parentCashRepositoryId: {
          select: {
            id: true,
          },
        },

        purchases: {
          select: {
            id: true,
          },
        },

        tenantId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CashRepository] })
  @ApiNestedQuery(CashRepositoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cashRepositories(
    @common.Req() request: Request
  ): Promise<CashRepository[]> {
    const args = plainToClass(CashRepositoryFindManyArgs, request.query);
    return this.service.cashRepositories({
      ...args,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,

        parentCashRepositoryId: {
          select: {
            id: true,
          },
        },

        purchases: {
          select: {
            id: true,
          },
        },

        tenantId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CashRepository })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cashRepository(
    @common.Param() params: CashRepositoryWhereUniqueInput
  ): Promise<CashRepository | null> {
    const result = await this.service.cashRepository({
      where: params,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,

        parentCashRepositoryId: {
          select: {
            id: true,
          },
        },

        purchases: {
          select: {
            id: true,
          },
        },

        tenantId: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: CashRepository })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCashRepository(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() data: CashRepositoryUpdateInput
  ): Promise<CashRepository | null> {
    try {
      return await this.service.updateCashRepository({
        where: params,
        data: {
          ...data,

          parentCashRepositoryId: data.parentCashRepositoryId
            ? {
                connect: data.parentCashRepositoryId,
              }
            : undefined,

          purchases: data.purchases
            ? {
                connect: data.purchases,
              }
            : undefined,

          tenantId: data.tenantId
            ? {
                connect: data.tenantId,
              }
            : undefined,
        },
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
          name: true,
          normalizedName: true,
          note: true,

          parentCashRepositoryId: {
            select: {
              id: true,
            },
          },

          purchases: {
            select: {
              id: true,
            },
          },

          tenantId: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: CashRepository })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCashRepository(
    @common.Param() params: CashRepositoryWhereUniqueInput
  ): Promise<CashRepository | null> {
    try {
      return await this.service.deleteCashRepository({
        where: params,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
          name: true,
          normalizedName: true,
          note: true,

          parentCashRepositoryId: {
            select: {
              id: true,
            },
          },

          purchases: {
            select: {
              id: true,
            },
          },

          tenantId: {
            select: {
              id: true,
            },
          },

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
  @common.Get("/:id/cashRepositories")
  @ApiNestedQuery(CashRepositoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "read",
    possession: "any",
  })
  async findCashRepositories(
    @common.Req() request: Request,
    @common.Param() params: CashRepositoryWhereUniqueInput
  ): Promise<CashRepository[]> {
    const query = plainToClass(CashRepositoryFindManyArgs, request.query);
    const results = await this.service.findCashRepositories(params.id, {
      ...query,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,

        parentCashRepositoryId: {
          select: {
            id: true,
          },
        },

        purchases: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/cashRepositories")
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async connectCashRepositories(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: CashRepositoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cashRepositories: {
        connect: body,
      },
    };
    await this.service.updateCashRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/cashRepositories")
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async updateCashRepositories(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: CashRepositoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cashRepositories: {
        set: body,
      },
    };
    await this.service.updateCashRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/cashRepositories")
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async disconnectCashRepositories(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: CashRepositoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cashRepositories: {
        disconnect: body,
      },
    };
    await this.service.updateCashRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/purchaseReturns")
  @ApiNestedQuery(PurchaseReturnFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturn",
    action: "read",
    possession: "any",
  })
  async findPurchaseReturns(
    @common.Req() request: Request,
    @common.Param() params: CashRepositoryWhereUniqueInput
  ): Promise<PurchaseReturn[]> {
    const query = plainToClass(PurchaseReturnFindManyArgs, request.query);
    const results = await this.service.findPurchaseReturns(params.id, {
      ...query,
      select: {
        cashRepositoryId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
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

        purchaseId: {
          select: {
            id: true,
          },
        },

        purchasePriceTypeId: {
          select: {
            id: true,
          },
        },

        purchaseReturnDate: true,
        purchaseReturnTotal: true,
        referenceNumber: true,
        remaining: true,
        sequenceNumber: true,

        storeId: {
          select: {
            id: true,
          },
        },

        supplierId: {
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

  @common.Post("/:id/purchaseReturns")
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async connectPurchaseReturns(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: PurchaseReturnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      purchaseReturns: {
        connect: body,
      },
    };
    await this.service.updateCashRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/purchaseReturns")
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async updatePurchaseReturns(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: PurchaseReturnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      purchaseReturns: {
        set: body,
      },
    };
    await this.service.updateCashRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/purchaseReturns")
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async disconnectPurchaseReturns(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: PurchaseReturnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      purchaseReturns: {
        disconnect: body,
      },
    };
    await this.service.updateCashRepository({
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
    @common.Param() params: CashRepositoryWhereUniqueInput
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
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async connectSaleOrders(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: SaleOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleOrders: {
        connect: body,
      },
    };
    await this.service.updateCashRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/saleOrders")
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async updateSaleOrders(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: SaleOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleOrders: {
        set: body,
      },
    };
    await this.service.updateCashRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/saleOrders")
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async disconnectSaleOrders(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: SaleOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleOrders: {
        disconnect: body,
      },
    };
    await this.service.updateCashRepository({
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
    @common.Param() params: CashRepositoryWhereUniqueInput
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
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async connectSaleReturns(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: SaleReturnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleReturns: {
        connect: body,
      },
    };
    await this.service.updateCashRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/saleReturns")
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async updateSaleReturns(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: SaleReturnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleReturns: {
        set: body,
      },
    };
    await this.service.updateCashRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/saleReturns")
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async disconnectSaleReturns(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: SaleReturnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleReturns: {
        disconnect: body,
      },
    };
    await this.service.updateCashRepository({
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
    @common.Param() params: CashRepositoryWhereUniqueInput
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
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async connectSales(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: SaleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sales: {
        connect: body,
      },
    };
    await this.service.updateCashRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sales")
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async updateSales(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: SaleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sales: {
        set: body,
      },
    };
    await this.service.updateCashRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sales")
  @nestAccessControl.UseRoles({
    resource: "CashRepository",
    action: "update",
    possession: "any",
  })
  async disconnectSales(
    @common.Param() params: CashRepositoryWhereUniqueInput,
    @common.Body() body: SaleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sales: {
        disconnect: body,
      },
    };
    await this.service.updateCashRepository({
      where: params,
      data,
      select: { id: true },
    });
  }
}
