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
import { FiscalYearService } from "../fiscalYear.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FiscalYearCreateInput } from "./FiscalYearCreateInput";
import { FiscalYear } from "./FiscalYear";
import { FiscalYearFindManyArgs } from "./FiscalYearFindManyArgs";
import { FiscalYearWhereUniqueInput } from "./FiscalYearWhereUniqueInput";
import { FiscalYearUpdateInput } from "./FiscalYearUpdateInput";
import { FiscalMonthFindManyArgs } from "../../fiscalMonth/base/FiscalMonthFindManyArgs";
import { FiscalMonth } from "../../fiscalMonth/base/FiscalMonth";
import { FiscalMonthWhereUniqueInput } from "../../fiscalMonth/base/FiscalMonthWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FiscalYearControllerBase {
  constructor(
    protected readonly service: FiscalYearService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FiscalYear })
  @nestAccessControl.UseRoles({
    resource: "FiscalYear",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFiscalYear(
    @common.Body() data: FiscalYearCreateInput
  ): Promise<FiscalYear> {
    return await this.service.createFiscalYear({
      data: data,
      select: {
        code: true,
        createdAt: true,
        endsOn: true,
        id: true,
        isEodRequired: true,
        name: true,
        normalizedName: true,
        notes: true,
        startsFrom: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FiscalYear] })
  @ApiNestedQuery(FiscalYearFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FiscalYear",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fiscalYears(@common.Req() request: Request): Promise<FiscalYear[]> {
    const args = plainToClass(FiscalYearFindManyArgs, request.query);
    return this.service.fiscalYears({
      ...args,
      select: {
        code: true,
        createdAt: true,
        endsOn: true,
        id: true,
        isEodRequired: true,
        name: true,
        normalizedName: true,
        notes: true,
        startsFrom: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FiscalYear })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FiscalYear",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fiscalYear(
    @common.Param() params: FiscalYearWhereUniqueInput
  ): Promise<FiscalYear | null> {
    const result = await this.service.fiscalYear({
      where: params,
      select: {
        code: true,
        createdAt: true,
        endsOn: true,
        id: true,
        isEodRequired: true,
        name: true,
        normalizedName: true,
        notes: true,
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
  @swagger.ApiOkResponse({ type: FiscalYear })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FiscalYear",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFiscalYear(
    @common.Param() params: FiscalYearWhereUniqueInput,
    @common.Body() data: FiscalYearUpdateInput
  ): Promise<FiscalYear | null> {
    try {
      return await this.service.updateFiscalYear({
        where: params,
        data: data,
        select: {
          code: true,
          createdAt: true,
          endsOn: true,
          id: true,
          isEodRequired: true,
          name: true,
          normalizedName: true,
          notes: true,
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
  @swagger.ApiOkResponse({ type: FiscalYear })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FiscalYear",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFiscalYear(
    @common.Param() params: FiscalYearWhereUniqueInput
  ): Promise<FiscalYear | null> {
    try {
      return await this.service.deleteFiscalYear({
        where: params,
        select: {
          code: true,
          createdAt: true,
          endsOn: true,
          id: true,
          isEodRequired: true,
          name: true,
          normalizedName: true,
          notes: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/fiscalMonths")
  @ApiNestedQuery(FiscalMonthFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FiscalMonth",
    action: "read",
    possession: "any",
  })
  async findFiscalMonths(
    @common.Req() request: Request,
    @common.Param() params: FiscalYearWhereUniqueInput
  ): Promise<FiscalMonth[]> {
    const query = plainToClass(FiscalMonthFindManyArgs, request.query);
    const results = await this.service.findFiscalMonths(params.id, {
      ...query,
      select: {
        code: true,
        createdAt: true,
        description: true,
        endsOn: true,

        fiscalYear: {
          select: {
            id: true,
          },
        },

        id: true,
        mormalizedName: true,
        name: true,
        note: true,
        startsFrom: true,
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

  @common.Post("/:id/fiscalMonths")
  @nestAccessControl.UseRoles({
    resource: "FiscalYear",
    action: "update",
    possession: "any",
  })
  async connectFiscalMonths(
    @common.Param() params: FiscalYearWhereUniqueInput,
    @common.Body() body: FiscalMonthWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fiscalMonths: {
        connect: body,
      },
    };
    await this.service.updateFiscalYear({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/fiscalMonths")
  @nestAccessControl.UseRoles({
    resource: "FiscalYear",
    action: "update",
    possession: "any",
  })
  async updateFiscalMonths(
    @common.Param() params: FiscalYearWhereUniqueInput,
    @common.Body() body: FiscalMonthWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fiscalMonths: {
        set: body,
      },
    };
    await this.service.updateFiscalYear({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/fiscalMonths")
  @nestAccessControl.UseRoles({
    resource: "FiscalYear",
    action: "update",
    possession: "any",
  })
  async disconnectFiscalMonths(
    @common.Param() params: FiscalYearWhereUniqueInput,
    @common.Body() body: FiscalMonthWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fiscalMonths: {
        disconnect: body,
      },
    };
    await this.service.updateFiscalYear({
      where: params,
      data,
      select: { id: true },
    });
  }
}
