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
import { WorkCenterAlternativeService } from "../workCenterAlternative.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WorkCenterAlternativeCreateInput } from "./WorkCenterAlternativeCreateInput";
import { WorkCenterAlternative } from "./WorkCenterAlternative";
import { WorkCenterAlternativeFindManyArgs } from "./WorkCenterAlternativeFindManyArgs";
import { WorkCenterAlternativeWhereUniqueInput } from "./WorkCenterAlternativeWhereUniqueInput";
import { WorkCenterAlternativeUpdateInput } from "./WorkCenterAlternativeUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WorkCenterAlternativeControllerBase {
  constructor(
    protected readonly service: WorkCenterAlternativeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WorkCenterAlternative })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterAlternative",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createWorkCenterAlternative(
    @common.Body() data: WorkCenterAlternativeCreateInput
  ): Promise<WorkCenterAlternative> {
    return await this.service.createWorkCenterAlternative({
      data: {
        ...data,

        alternativeWorkCenterId: {
          connect: data.alternativeWorkCenterId,
        },

        tenantId: data.tenantId
          ? {
              connect: data.tenantId,
            }
          : undefined,

        workCenterId: {
          connect: data.workCenterId,
        },
      },
      select: {
        alternativeWorkCenterId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isActive: true,
        note: true,

        tenantId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        workCenterId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [WorkCenterAlternative] })
  @ApiNestedQuery(WorkCenterAlternativeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WorkCenterAlternative",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async workCenterAlternatives(
    @common.Req() request: Request
  ): Promise<WorkCenterAlternative[]> {
    const args = plainToClass(WorkCenterAlternativeFindManyArgs, request.query);
    return this.service.workCenterAlternatives({
      ...args,
      select: {
        alternativeWorkCenterId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isActive: true,
        note: true,

        tenantId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        workCenterId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WorkCenterAlternative })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterAlternative",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async workCenterAlternative(
    @common.Param() params: WorkCenterAlternativeWhereUniqueInput
  ): Promise<WorkCenterAlternative | null> {
    const result = await this.service.workCenterAlternative({
      where: params,
      select: {
        alternativeWorkCenterId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isActive: true,
        note: true,

        tenantId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        workCenterId: {
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
  @swagger.ApiOkResponse({ type: WorkCenterAlternative })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterAlternative",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateWorkCenterAlternative(
    @common.Param() params: WorkCenterAlternativeWhereUniqueInput,
    @common.Body() data: WorkCenterAlternativeUpdateInput
  ): Promise<WorkCenterAlternative | null> {
    try {
      return await this.service.updateWorkCenterAlternative({
        where: params,
        data: {
          ...data,

          alternativeWorkCenterId: {
            connect: data.alternativeWorkCenterId,
          },

          tenantId: data.tenantId
            ? {
                connect: data.tenantId,
              }
            : undefined,

          workCenterId: {
            connect: data.workCenterId,
          },
        },
        select: {
          alternativeWorkCenterId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          isActive: true,
          note: true,

          tenantId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          workCenterId: {
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
  @swagger.ApiOkResponse({ type: WorkCenterAlternative })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WorkCenterAlternative",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWorkCenterAlternative(
    @common.Param() params: WorkCenterAlternativeWhereUniqueInput
  ): Promise<WorkCenterAlternative | null> {
    try {
      return await this.service.deleteWorkCenterAlternative({
        where: params,
        select: {
          alternativeWorkCenterId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          isActive: true,
          note: true,

          tenantId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          workCenterId: {
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
}
