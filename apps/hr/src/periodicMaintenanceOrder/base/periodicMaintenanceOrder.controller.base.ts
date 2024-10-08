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
import { PeriodicMaintenanceOrderService } from "../periodicMaintenanceOrder.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PeriodicMaintenanceOrderCreateInput } from "./PeriodicMaintenanceOrderCreateInput";
import { PeriodicMaintenanceOrder } from "./PeriodicMaintenanceOrder";
import { PeriodicMaintenanceOrderFindManyArgs } from "./PeriodicMaintenanceOrderFindManyArgs";
import { PeriodicMaintenanceOrderWhereUniqueInput } from "./PeriodicMaintenanceOrderWhereUniqueInput";
import { PeriodicMaintenanceOrderUpdateInput } from "./PeriodicMaintenanceOrderUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PeriodicMaintenanceOrderControllerBase {
  constructor(
    protected readonly service: PeriodicMaintenanceOrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PeriodicMaintenanceOrder })
  @nestAccessControl.UseRoles({
    resource: "PeriodicMaintenanceOrder",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPeriodicMaintenanceOrder(
    @common.Body() data: PeriodicMaintenanceOrderCreateInput
  ): Promise<PeriodicMaintenanceOrder> {
    return await this.service.createPeriodicMaintenanceOrder({
      data: {
        ...data,

        customerElevator: data.customerElevator
          ? {
              connect: data.customerElevator,
            }
          : undefined,

        customerUserId: data.customerUserId
          ? {
              connect: data.customerUserId,
            }
          : undefined,

        elevatorId: data.elevatorId
          ? {
              connect: data.elevatorId,
            }
          : undefined,

        storeId: {
          connect: data.storeId,
        },
      },
      select: {
        confirmDate: true,
        contractEndDate: true,
        contractStartDate: true,
        createdAt: true,

        customerElevator: {
          select: {
            id: true,
          },
        },

        customerUserId: {
          select: {
            id: true,
          },
        },

        elevatorId: {
          select: {
            id: true,
          },
        },

        id: true,
        isConfirmed: true,
        orderDate: true,

        storeId: {
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
  @swagger.ApiOkResponse({ type: [PeriodicMaintenanceOrder] })
  @ApiNestedQuery(PeriodicMaintenanceOrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PeriodicMaintenanceOrder",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async periodicMaintenanceOrders(
    @common.Req() request: Request
  ): Promise<PeriodicMaintenanceOrder[]> {
    const args = plainToClass(
      PeriodicMaintenanceOrderFindManyArgs,
      request.query
    );
    return this.service.periodicMaintenanceOrders({
      ...args,
      select: {
        confirmDate: true,
        contractEndDate: true,
        contractStartDate: true,
        createdAt: true,

        customerElevator: {
          select: {
            id: true,
          },
        },

        customerUserId: {
          select: {
            id: true,
          },
        },

        elevatorId: {
          select: {
            id: true,
          },
        },

        id: true,
        isConfirmed: true,
        orderDate: true,

        storeId: {
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
  @swagger.ApiOkResponse({ type: PeriodicMaintenanceOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PeriodicMaintenanceOrder",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async periodicMaintenanceOrder(
    @common.Param() params: PeriodicMaintenanceOrderWhereUniqueInput
  ): Promise<PeriodicMaintenanceOrder | null> {
    const result = await this.service.periodicMaintenanceOrder({
      where: params,
      select: {
        confirmDate: true,
        contractEndDate: true,
        contractStartDate: true,
        createdAt: true,

        customerElevator: {
          select: {
            id: true,
          },
        },

        customerUserId: {
          select: {
            id: true,
          },
        },

        elevatorId: {
          select: {
            id: true,
          },
        },

        id: true,
        isConfirmed: true,
        orderDate: true,

        storeId: {
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
  @swagger.ApiOkResponse({ type: PeriodicMaintenanceOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PeriodicMaintenanceOrder",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePeriodicMaintenanceOrder(
    @common.Param() params: PeriodicMaintenanceOrderWhereUniqueInput,
    @common.Body() data: PeriodicMaintenanceOrderUpdateInput
  ): Promise<PeriodicMaintenanceOrder | null> {
    try {
      return await this.service.updatePeriodicMaintenanceOrder({
        where: params,
        data: {
          ...data,

          customerElevator: data.customerElevator
            ? {
                connect: data.customerElevator,
              }
            : undefined,

          customerUserId: data.customerUserId
            ? {
                connect: data.customerUserId,
              }
            : undefined,

          elevatorId: data.elevatorId
            ? {
                connect: data.elevatorId,
              }
            : undefined,

          storeId: {
            connect: data.storeId,
          },
        },
        select: {
          confirmDate: true,
          contractEndDate: true,
          contractStartDate: true,
          createdAt: true,

          customerElevator: {
            select: {
              id: true,
            },
          },

          customerUserId: {
            select: {
              id: true,
            },
          },

          elevatorId: {
            select: {
              id: true,
            },
          },

          id: true,
          isConfirmed: true,
          orderDate: true,

          storeId: {
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
  @swagger.ApiOkResponse({ type: PeriodicMaintenanceOrder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PeriodicMaintenanceOrder",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePeriodicMaintenanceOrder(
    @common.Param() params: PeriodicMaintenanceOrderWhereUniqueInput
  ): Promise<PeriodicMaintenanceOrder | null> {
    try {
      return await this.service.deletePeriodicMaintenanceOrder({
        where: params,
        select: {
          confirmDate: true,
          contractEndDate: true,
          contractStartDate: true,
          createdAt: true,

          customerElevator: {
            select: {
              id: true,
            },
          },

          customerUserId: {
            select: {
              id: true,
            },
          },

          elevatorId: {
            select: {
              id: true,
            },
          },

          id: true,
          isConfirmed: true,
          orderDate: true,

          storeId: {
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
