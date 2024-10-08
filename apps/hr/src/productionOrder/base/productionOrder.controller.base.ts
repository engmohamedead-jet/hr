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
import { ProductionOrderService } from "../productionOrder.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductionOrderCreateInput } from "./ProductionOrderCreateInput";
import { ProductionOrder } from "./ProductionOrder";
import { ProductionOrderFindManyArgs } from "./ProductionOrderFindManyArgs";
import { ProductionOrderWhereUniqueInput } from "./ProductionOrderWhereUniqueInput";
import { ProductionOrderUpdateInput } from "./ProductionOrderUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductionOrderControllerBase {
  constructor(
    protected readonly service: ProductionOrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductionOrder })
  @nestAccessControl.UseRoles({
    resource: "ProductionOrder",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProductionOrder(
    @common.Body() data: ProductionOrderCreateInput
  ): Promise<ProductionOrder> {
    return await this.service.createProductionOrder({
      data: {
        ...data,

        billOfMaterialId: data.billOfMaterialId
          ? {
              connect: data.billOfMaterialId,
            }
          : undefined,

        customerId: data.customerId
          ? {
              connect: data.customerId,
            }
          : undefined,

        orderStatusId: {
          connect: data.orderStatusId,
        },

        productId: {
          connect: data.productId,
        },

        storeId: {
          connect: data.storeId,
        },

        tenantId: data.tenantId
          ? {
              connect: data.tenantId,
            }
          : undefined,

        unit: {
          connect: data.unit,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductionOrder] })
  @ApiNestedQuery(ProductionOrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProductionOrder",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async productionOrders(
    @common.Req() request: Request
  ): Promise<ProductionOrder[]> {
    const args = plainToClass(ProductionOrderFindManyArgs, request.query);
    return this.service.productionOrders({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductionOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductionOrder",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async productionOrder(
    @common.Param() params: ProductionOrderWhereUniqueInput
  ): Promise<ProductionOrder | null> {
    const result = await this.service.productionOrder({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProductionOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductionOrder",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProductionOrder(
    @common.Param() params: ProductionOrderWhereUniqueInput,
    @common.Body() data: ProductionOrderUpdateInput
  ): Promise<ProductionOrder | null> {
    try {
      return await this.service.updateProductionOrder({
        where: params,
        data: {
          ...data,

          billOfMaterialId: data.billOfMaterialId
            ? {
                connect: data.billOfMaterialId,
              }
            : undefined,

          customerId: data.customerId
            ? {
                connect: data.customerId,
              }
            : undefined,

          orderStatusId: {
            connect: data.orderStatusId,
          },

          productId: {
            connect: data.productId,
          },

          storeId: {
            connect: data.storeId,
          },

          tenantId: data.tenantId
            ? {
                connect: data.tenantId,
              }
            : undefined,

          unit: {
            connect: data.unit,
          },
        },
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
  @swagger.ApiOkResponse({ type: ProductionOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductionOrder",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProductionOrder(
    @common.Param() params: ProductionOrderWhereUniqueInput
  ): Promise<ProductionOrder | null> {
    try {
      return await this.service.deleteProductionOrder({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
