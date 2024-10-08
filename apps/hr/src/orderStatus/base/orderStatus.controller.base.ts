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
import { OrderStatusService } from "../orderStatus.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrderStatusCreateInput } from "./OrderStatusCreateInput";
import { OrderStatus } from "./OrderStatus";
import { OrderStatusFindManyArgs } from "./OrderStatusFindManyArgs";
import { OrderStatusWhereUniqueInput } from "./OrderStatusWhereUniqueInput";
import { OrderStatusUpdateInput } from "./OrderStatusUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrderStatusControllerBase {
  constructor(
    protected readonly service: OrderStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OrderStatus })
  @nestAccessControl.UseRoles({
    resource: "OrderStatus",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOrderStatus(
    @common.Body() data: OrderStatusCreateInput
  ): Promise<OrderStatus> {
    return await this.service.createOrderStatus({
      data: {
        ...data,

        productionOrders: data.productionOrders
          ? {
              connect: data.productionOrders,
            }
          : undefined,

        saleOrders: data.saleOrders
          ? {
              connect: data.saleOrders,
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

        productionOrders: {
          select: {
            id: true,
          },
        },

        saleOrders: {
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
  @swagger.ApiOkResponse({ type: [OrderStatus] })
  @ApiNestedQuery(OrderStatusFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OrderStatus",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async orderStatuses(@common.Req() request: Request): Promise<OrderStatus[]> {
    const args = plainToClass(OrderStatusFindManyArgs, request.query);
    return this.service.orderStatuses({
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

        productionOrders: {
          select: {
            id: true,
          },
        },

        saleOrders: {
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
  @swagger.ApiOkResponse({ type: OrderStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderStatus",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async orderStatus(
    @common.Param() params: OrderStatusWhereUniqueInput
  ): Promise<OrderStatus | null> {
    const result = await this.service.orderStatus({
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

        productionOrders: {
          select: {
            id: true,
          },
        },

        saleOrders: {
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
  @swagger.ApiOkResponse({ type: OrderStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderStatus",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOrderStatus(
    @common.Param() params: OrderStatusWhereUniqueInput,
    @common.Body() data: OrderStatusUpdateInput
  ): Promise<OrderStatus | null> {
    try {
      return await this.service.updateOrderStatus({
        where: params,
        data: {
          ...data,

          productionOrders: data.productionOrders
            ? {
                connect: data.productionOrders,
              }
            : undefined,

          saleOrders: data.saleOrders
            ? {
                connect: data.saleOrders,
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

          productionOrders: {
            select: {
              id: true,
            },
          },

          saleOrders: {
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
  @swagger.ApiOkResponse({ type: OrderStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OrderStatus",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOrderStatus(
    @common.Param() params: OrderStatusWhereUniqueInput
  ): Promise<OrderStatus | null> {
    try {
      return await this.service.deleteOrderStatus({
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

          productionOrders: {
            select: {
              id: true,
            },
          },

          saleOrders: {
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
}
