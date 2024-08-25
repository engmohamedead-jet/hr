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
import { WorkSheetTypeService } from "../workSheetType.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WorkSheetTypeCreateInput } from "./WorkSheetTypeCreateInput";
import { WorkSheetType } from "./WorkSheetType";
import { WorkSheetTypeFindManyArgs } from "./WorkSheetTypeFindManyArgs";
import { WorkSheetTypeWhereUniqueInput } from "./WorkSheetTypeWhereUniqueInput";
import { WorkSheetTypeUpdateInput } from "./WorkSheetTypeUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WorkSheetTypeControllerBase {
  constructor(
    protected readonly service: WorkSheetTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WorkSheetType })
  @nestAccessControl.UseRoles({
    resource: "WorkSheetType",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createWorkSheetType(
    @common.Body() data: WorkSheetTypeCreateInput
  ): Promise<WorkSheetType> {
    return await this.service.createWorkSheetType({
      data: {
        ...data,

        tenant: data.tenant
          ? {
              connect: data.tenant,
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

        tenant: {
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
  @swagger.ApiOkResponse({ type: [WorkSheetType] })
  @ApiNestedQuery(WorkSheetTypeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WorkSheetType",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async workSheetTypes(
    @common.Req() request: Request
  ): Promise<WorkSheetType[]> {
    const args = plainToClass(WorkSheetTypeFindManyArgs, request.query);
    return this.service.workSheetTypes({
      ...args,
      select: {
        code: true,
        createdAt: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,

        tenant: {
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
  @swagger.ApiOkResponse({ type: WorkSheetType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WorkSheetType",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async workSheetType(
    @common.Param() params: WorkSheetTypeWhereUniqueInput
  ): Promise<WorkSheetType | null> {
    const result = await this.service.workSheetType({
      where: params,
      select: {
        code: true,
        createdAt: true,
        id: true,
        isActive: true,
        name: true,
        normalizedName: true,
        note: true,

        tenant: {
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
  @swagger.ApiOkResponse({ type: WorkSheetType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WorkSheetType",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateWorkSheetType(
    @common.Param() params: WorkSheetTypeWhereUniqueInput,
    @common.Body() data: WorkSheetTypeUpdateInput
  ): Promise<WorkSheetType | null> {
    try {
      return await this.service.updateWorkSheetType({
        where: params,
        data: {
          ...data,

          tenant: data.tenant
            ? {
                connect: data.tenant,
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

          tenant: {
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
  @swagger.ApiOkResponse({ type: WorkSheetType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WorkSheetType",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWorkSheetType(
    @common.Param() params: WorkSheetTypeWhereUniqueInput
  ): Promise<WorkSheetType | null> {
    try {
      return await this.service.deleteWorkSheetType({
        where: params,
        select: {
          code: true,
          createdAt: true,
          id: true,
          isActive: true,
          name: true,
          normalizedName: true,
          note: true,

          tenant: {
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
