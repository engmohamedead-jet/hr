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
import { ShiftService } from "../shift.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ShiftCreateInput } from "./ShiftCreateInput";
import { Shift } from "./Shift";
import { ShiftFindManyArgs } from "./ShiftFindManyArgs";
import { ShiftWhereUniqueInput } from "./ShiftWhereUniqueInput";
import { ShiftUpdateInput } from "./ShiftUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ShiftControllerBase {
  constructor(
    protected readonly service: ShiftService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Shift })
  @nestAccessControl.UseRoles({
    resource: "Shift",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createShift(@common.Body() data: ShiftCreateInput): Promise<Shift> {
    return await this.service.createShift({
      data: {
        ...data,

        tenantid: data.tenantid
          ? {
              connect: data.tenantid,
            }
          : undefined,
      },
      select: {
        code: true,
        createdAt: true,
        endTime: true,
        id: true,
        isActive: true,
        name: true,
        nameNormalizedName: true,
        note: true,
        startTime: true,

        tenantid: {
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
  @swagger.ApiOkResponse({ type: [Shift] })
  @ApiNestedQuery(ShiftFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Shift",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async shifts(@common.Req() request: Request): Promise<Shift[]> {
    const args = plainToClass(ShiftFindManyArgs, request.query);
    return this.service.shifts({
      ...args,
      select: {
        code: true,
        createdAt: true,
        endTime: true,
        id: true,
        isActive: true,
        name: true,
        nameNormalizedName: true,
        note: true,
        startTime: true,

        tenantid: {
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
  @swagger.ApiOkResponse({ type: Shift })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Shift",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async shift(
    @common.Param() params: ShiftWhereUniqueInput
  ): Promise<Shift | null> {
    const result = await this.service.shift({
      where: params,
      select: {
        code: true,
        createdAt: true,
        endTime: true,
        id: true,
        isActive: true,
        name: true,
        nameNormalizedName: true,
        note: true,
        startTime: true,

        tenantid: {
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
  @swagger.ApiOkResponse({ type: Shift })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Shift",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateShift(
    @common.Param() params: ShiftWhereUniqueInput,
    @common.Body() data: ShiftUpdateInput
  ): Promise<Shift | null> {
    try {
      return await this.service.updateShift({
        where: params,
        data: {
          ...data,

          tenantid: data.tenantid
            ? {
                connect: data.tenantid,
              }
            : undefined,
        },
        select: {
          code: true,
          createdAt: true,
          endTime: true,
          id: true,
          isActive: true,
          name: true,
          nameNormalizedName: true,
          note: true,
          startTime: true,

          tenantid: {
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
  @swagger.ApiOkResponse({ type: Shift })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Shift",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteShift(
    @common.Param() params: ShiftWhereUniqueInput
  ): Promise<Shift | null> {
    try {
      return await this.service.deleteShift({
        where: params,
        select: {
          code: true,
          createdAt: true,
          endTime: true,
          id: true,
          isActive: true,
          name: true,
          nameNormalizedName: true,
          note: true,
          startTime: true,

          tenantid: {
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
