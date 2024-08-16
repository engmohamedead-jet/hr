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
import { WorkCenterRoutingService } from "../workCenterRouting.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WorkCenterRoutingCreateInput } from "./WorkCenterRoutingCreateInput";
import { WorkCenterRouting } from "./WorkCenterRouting";
import { WorkCenterRoutingFindManyArgs } from "./WorkCenterRoutingFindManyArgs";
import { WorkCenterRoutingWhereUniqueInput } from "./WorkCenterRoutingWhereUniqueInput";
import { WorkCenterRoutingUpdateInput } from "./WorkCenterRoutingUpdateInput";
import { BillOfMaterialDetailFindManyArgs } from "../../billOfMaterialDetail/base/BillOfMaterialDetailFindManyArgs";
import { BillOfMaterialDetail } from "../../billOfMaterialDetail/base/BillOfMaterialDetail";
import { BillOfMaterialDetailWhereUniqueInput } from "../../billOfMaterialDetail/base/BillOfMaterialDetailWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WorkCenterRoutingControllerBase {
  constructor(
    protected readonly service: WorkCenterRoutingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WorkCenterRouting })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createWorkCenterRouting(
    @common.Body() data: WorkCenterRoutingCreateInput
  ): Promise<WorkCenterRouting> {
    return await this.service.createWorkCenterRouting({
      data: {
        ...data,

        workCenter: data.workCenter
          ? {
              connect: data.workCenter,
            }
          : undefined,
      },
      select: {
        code: true,
        createdAt: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,
        sequence: true,
        timeCycleManual: true,
        timeModeBatch: true,
        updatedAt: true,

        workCenter: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [WorkCenterRouting] })
  @ApiNestedQuery(WorkCenterRoutingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async workCenterRoutings(
    @common.Req() request: Request
  ): Promise<WorkCenterRouting[]> {
    const args = plainToClass(WorkCenterRoutingFindManyArgs, request.query);
    return this.service.workCenterRoutings({
      ...args,
      select: {
        code: true,
        createdAt: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,
        sequence: true,
        timeCycleManual: true,
        timeModeBatch: true,
        updatedAt: true,

        workCenter: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WorkCenterRouting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async workCenterRouting(
    @common.Param() params: WorkCenterRoutingWhereUniqueInput
  ): Promise<WorkCenterRouting | null> {
    const result = await this.service.workCenterRouting({
      where: params,
      select: {
        code: true,
        createdAt: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,
        sequence: true,
        timeCycleManual: true,
        timeModeBatch: true,
        updatedAt: true,

        workCenter: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: WorkCenterRouting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateWorkCenterRouting(
    @common.Param() params: WorkCenterRoutingWhereUniqueInput,
    @common.Body() data: WorkCenterRoutingUpdateInput
  ): Promise<WorkCenterRouting | null> {
    try {
      return await this.service.updateWorkCenterRouting({
        where: params,
        data: {
          ...data,

          workCenter: data.workCenter
            ? {
                connect: data.workCenter,
              }
            : undefined,
        },
        select: {
          code: true,
          createdAt: true,
          id: true,
          isActive: true,
          name: true,
          normalizedName: true,
          note: true,
          sequence: true,
          timeCycleManual: true,
          timeModeBatch: true,
          updatedAt: true,

          workCenter: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: WorkCenterRouting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWorkCenterRouting(
    @common.Param() params: WorkCenterRoutingWhereUniqueInput
  ): Promise<WorkCenterRouting | null> {
    try {
      return await this.service.deleteWorkCenterRouting({
        where: params,
        select: {
          code: true,
          createdAt: true,
          id: true,
          isActive: true,
          name: true,
          normalizedName: true,
          note: true,
          sequence: true,
          timeCycleManual: true,
          timeModeBatch: true,
          updatedAt: true,

          workCenter: {
            select: {
              id: true,
            },
          },
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
  @common.Get("/:id/billOfMaterialDetails")
  @ApiNestedQuery(BillOfMaterialDetailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BillOfMaterialDetail",
    action: "read",
    possession: "any",
  })
  async findBillOfMaterialDetails(
    @common.Req() request: Request,
    @common.Param() params: WorkCenterRoutingWhereUniqueInput
  ): Promise<BillOfMaterialDetail[]> {
    const query = plainToClass(BillOfMaterialDetailFindManyArgs, request.query);
    const results = await this.service.findBillOfMaterialDetails(params.id, {
      ...query,
      select: {
        billOfMaterial: {
          select: {
            id: true,
          },
        },

        costShare: true,
        createdAt: true,
        id: true,
        isActive: true,
        isManualConsumption: true,
        note: true,

        productId: {
          select: {
            id: true,
          },
        },

        productVariantId: {
          select: {
            id: true,
          },
        },

        quantity: true,
        sequence: true,

        unitId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        workCenterRoutingId: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/billOfMaterialDetails")
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "update",
    possession: "any",
  })
  async connectBillOfMaterialDetails(
    @common.Param() params: WorkCenterRoutingWhereUniqueInput,
    @common.Body() body: BillOfMaterialDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billOfMaterialDetails: {
        connect: body,
      },
    };
    await this.service.updateWorkCenterRouting({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/billOfMaterialDetails")
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "update",
    possession: "any",
  })
  async updateBillOfMaterialDetails(
    @common.Param() params: WorkCenterRoutingWhereUniqueInput,
    @common.Body() body: BillOfMaterialDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billOfMaterialDetails: {
        set: body,
      },
    };
    await this.service.updateWorkCenterRouting({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/billOfMaterialDetails")
  @nestAccessControl.UseRoles({
    resource: "WorkCenterRouting",
    action: "update",
    possession: "any",
  })
  async disconnectBillOfMaterialDetails(
    @common.Param() params: WorkCenterRoutingWhereUniqueInput,
    @common.Body() body: BillOfMaterialDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billOfMaterialDetails: {
        disconnect: body,
      },
    };
    await this.service.updateWorkCenterRouting({
      where: params,
      data,
      select: { id: true },
    });
  }
}