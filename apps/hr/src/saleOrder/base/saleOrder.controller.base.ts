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
import { SaleOrderService } from "../saleOrder.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SaleOrderCreateInput } from "./SaleOrderCreateInput";
import { SaleOrder } from "./SaleOrder";
import { SaleOrderFindManyArgs } from "./SaleOrderFindManyArgs";
import { SaleOrderWhereUniqueInput } from "./SaleOrderWhereUniqueInput";
import { SaleOrderUpdateInput } from "./SaleOrderUpdateInput";
import { SaleOrderDetailFindManyArgs } from "../../saleOrderDetail/base/SaleOrderDetailFindManyArgs";
import { SaleOrderDetail } from "../../saleOrderDetail/base/SaleOrderDetail";
import { SaleOrderDetailWhereUniqueInput } from "../../saleOrderDetail/base/SaleOrderDetailWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SaleOrderControllerBase {
  constructor(
    protected readonly service: SaleOrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SaleOrder })
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSaleOrder(
    @common.Body() data: SaleOrderCreateInput
  ): Promise<SaleOrder> {
    return await this.service.createSaleOrder({
      data: {
        ...data,

        cashRepositoryId: data.cashRepositoryId
          ? {
              connect: data.cashRepositoryId,
            }
          : undefined,

        customerId: {
          connect: data.customerId,
        },

        invoiceTypeId: data.invoiceTypeId
          ? {
              connect: data.invoiceTypeId,
            }
          : undefined,

        orderStatus: {
          connect: data.orderStatus,
        },

        paymentStatus: data.paymentStatus
          ? {
              connect: data.paymentStatus,
            }
          : undefined,

        paymentTypeId: data.paymentTypeId
          ? {
              connect: data.paymentTypeId,
            }
          : undefined,

        salePriceType: {
          connect: data.salePriceType,
        },

        saleQuotation: data.saleQuotation
          ? {
              connect: data.saleQuotation,
            }
          : undefined,

        shippingStatus: data.shippingStatus
          ? {
              connect: data.shippingStatus,
            }
          : undefined,

        storeId: data.storeId
          ? {
              connect: data.storeId,
            }
          : undefined,

        tenant: data.tenant
          ? {
              connect: data.tenant,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SaleOrder] })
  @ApiNestedQuery(SaleOrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async saleOrders(@common.Req() request: Request): Promise<SaleOrder[]> {
    const args = plainToClass(SaleOrderFindManyArgs, request.query);
    return this.service.saleOrders({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SaleOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async saleOrder(
    @common.Param() params: SaleOrderWhereUniqueInput
  ): Promise<SaleOrder | null> {
    const result = await this.service.saleOrder({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SaleOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSaleOrder(
    @common.Param() params: SaleOrderWhereUniqueInput,
    @common.Body() data: SaleOrderUpdateInput
  ): Promise<SaleOrder | null> {
    try {
      return await this.service.updateSaleOrder({
        where: params,
        data: {
          ...data,

          cashRepositoryId: data.cashRepositoryId
            ? {
                connect: data.cashRepositoryId,
              }
            : undefined,

          customerId: {
            connect: data.customerId,
          },

          invoiceTypeId: data.invoiceTypeId
            ? {
                connect: data.invoiceTypeId,
              }
            : undefined,

          orderStatus: {
            connect: data.orderStatus,
          },

          paymentStatus: data.paymentStatus
            ? {
                connect: data.paymentStatus,
              }
            : undefined,

          paymentTypeId: data.paymentTypeId
            ? {
                connect: data.paymentTypeId,
              }
            : undefined,

          salePriceType: {
            connect: data.salePriceType,
          },

          saleQuotation: data.saleQuotation
            ? {
                connect: data.saleQuotation,
              }
            : undefined,

          shippingStatus: data.shippingStatus
            ? {
                connect: data.shippingStatus,
              }
            : undefined,

          storeId: data.storeId
            ? {
                connect: data.storeId,
              }
            : undefined,

          tenant: data.tenant
            ? {
                connect: data.tenant,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: SaleOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSaleOrder(
    @common.Param() params: SaleOrderWhereUniqueInput
  ): Promise<SaleOrder | null> {
    try {
      return await this.service.deleteSaleOrder({
        where: params,
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
  @common.Get("/:id/saleOrderDetails")
  @ApiNestedQuery(SaleOrderDetailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SaleOrderDetail",
    action: "read",
    possession: "any",
  })
  async findSaleOrderDetails(
    @common.Req() request: Request,
    @common.Param() params: SaleOrderWhereUniqueInput
  ): Promise<SaleOrderDetail[]> {
    const query = plainToClass(SaleOrderDetailFindManyArgs, request.query);
    const results = await this.service.findSaleOrderDetails(params.id, {
      ...query,
      select: {
        barcode: true,
        createdAt: true,
        discount: true,
        discountRate: true,
        id: true,
        isActive: true,
        isError: true,
        isTaxed: true,
        price: true,
        priceTotal: true,

        productId: {
          select: {
            id: true,
          },
        },

        productSerialNumber: true,

        productVariantId: {
          select: {
            id: true,
          },
        },

        quantity: true,

        saleOrder: {
          select: {
            id: true,
          },
        },

        salePriceTypeId: {
          select: {
            id: true,
          },
        },

        sequence: true,

        tenant: {
          select: {
            id: true,
          },
        },

        unitId: {
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

  @common.Post("/:id/saleOrderDetails")
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "update",
    possession: "any",
  })
  async connectSaleOrderDetails(
    @common.Param() params: SaleOrderWhereUniqueInput,
    @common.Body() body: SaleOrderDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleOrderDetails: {
        connect: body,
      },
    };
    await this.service.updateSaleOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/saleOrderDetails")
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "update",
    possession: "any",
  })
  async updateSaleOrderDetails(
    @common.Param() params: SaleOrderWhereUniqueInput,
    @common.Body() body: SaleOrderDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleOrderDetails: {
        set: body,
      },
    };
    await this.service.updateSaleOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/saleOrderDetails")
  @nestAccessControl.UseRoles({
    resource: "SaleOrder",
    action: "update",
    possession: "any",
  })
  async disconnectSaleOrderDetails(
    @common.Param() params: SaleOrderWhereUniqueInput,
    @common.Body() body: SaleOrderDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleOrderDetails: {
        disconnect: body,
      },
    };
    await this.service.updateSaleOrder({
      where: params,
      data,
      select: { id: true },
    });
  }
}
