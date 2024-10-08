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
import { FiscalWeekService } from "../fiscalWeek.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FiscalWeekCreateInput } from "./FiscalWeekCreateInput";
import { FiscalWeek } from "./FiscalWeek";
import { FiscalWeekFindManyArgs } from "./FiscalWeekFindManyArgs";
import { FiscalWeekWhereUniqueInput } from "./FiscalWeekWhereUniqueInput";
import { FiscalWeekUpdateInput } from "./FiscalWeekUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FiscalWeekControllerBase {
  constructor(
    protected readonly service: FiscalWeekService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FiscalWeek })
  @nestAccessControl.UseRoles({
    resource: "FiscalWeek",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFiscalWeek(
    @common.Body() data: FiscalWeekCreateInput
  ): Promise<FiscalWeek> {
    return await this.service.createFiscalWeek({
      data: {
        ...data,

        fiscalMonthId: {
          connect: data.fiscalMonthId,
        },
      },
      select: {
        code: true,
        createdAt: true,
        endsOn: true,

        fiscalMonthId: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        normalizedName: true,
        note: true,
        startsFrom: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FiscalWeek] })
  @ApiNestedQuery(FiscalWeekFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FiscalWeek",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fiscalWeeks(@common.Req() request: Request): Promise<FiscalWeek[]> {
    const args = plainToClass(FiscalWeekFindManyArgs, request.query);
    return this.service.fiscalWeeks({
      ...args,
      select: {
        code: true,
        createdAt: true,
        endsOn: true,

        fiscalMonthId: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        normalizedName: true,
        note: true,
        startsFrom: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FiscalWeek })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FiscalWeek",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fiscalWeek(
    @common.Param() params: FiscalWeekWhereUniqueInput
  ): Promise<FiscalWeek | null> {
    const result = await this.service.fiscalWeek({
      where: params,
      select: {
        code: true,
        createdAt: true,
        endsOn: true,

        fiscalMonthId: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        normalizedName: true,
        note: true,
        startsFrom: true,
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
  @swagger.ApiOkResponse({ type: FiscalWeek })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FiscalWeek",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFiscalWeek(
    @common.Param() params: FiscalWeekWhereUniqueInput,
    @common.Body() data: FiscalWeekUpdateInput
  ): Promise<FiscalWeek | null> {
    try {
      return await this.service.updateFiscalWeek({
        where: params,
        data: {
          ...data,

          fiscalMonthId: {
            connect: data.fiscalMonthId,
          },
        },
        select: {
          code: true,
          createdAt: true,
          endsOn: true,

          fiscalMonthId: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          normalizedName: true,
          note: true,
          startsFrom: true,
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
  @swagger.ApiOkResponse({ type: FiscalWeek })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FiscalWeek",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFiscalWeek(
    @common.Param() params: FiscalWeekWhereUniqueInput
  ): Promise<FiscalWeek | null> {
    try {
      return await this.service.deleteFiscalWeek({
        where: params,
        select: {
          code: true,
          createdAt: true,
          endsOn: true,

          fiscalMonthId: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          normalizedName: true,
          note: true,
          startsFrom: true,
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
