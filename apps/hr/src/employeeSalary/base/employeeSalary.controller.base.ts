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
import { EmployeeSalaryService } from "../employeeSalary.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EmployeeSalaryCreateInput } from "./EmployeeSalaryCreateInput";
import { EmployeeSalary } from "./EmployeeSalary";
import { EmployeeSalaryFindManyArgs } from "./EmployeeSalaryFindManyArgs";
import { EmployeeSalaryWhereUniqueInput } from "./EmployeeSalaryWhereUniqueInput";
import { EmployeeSalaryUpdateInput } from "./EmployeeSalaryUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EmployeeSalaryControllerBase {
  constructor(
    protected readonly service: EmployeeSalaryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmployeeSalary })
  @nestAccessControl.UseRoles({
    resource: "EmployeeSalary",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEmployeeSalary(
    @common.Body() data: EmployeeSalaryCreateInput
  ): Promise<EmployeeSalary> {
    return await this.service.createEmployeeSalary({
      data: {
        ...data,

        fiscalMonthId: {
          connect: data.fiscalMonthId,
        },
      },
      select: {
        createdAt: true,

        fiscalMonthId: {
          select: {
            id: true,
          },
        },

        id: true,
        netSalary: true,
        note: true,
        totalDeserved: true,
        totalDiscount: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [EmployeeSalary] })
  @ApiNestedQuery(EmployeeSalaryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EmployeeSalary",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employeeSalaries(
    @common.Req() request: Request
  ): Promise<EmployeeSalary[]> {
    const args = plainToClass(EmployeeSalaryFindManyArgs, request.query);
    return this.service.employeeSalaries({
      ...args,
      select: {
        createdAt: true,

        fiscalMonthId: {
          select: {
            id: true,
          },
        },

        id: true,
        netSalary: true,
        note: true,
        totalDeserved: true,
        totalDiscount: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmployeeSalary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EmployeeSalary",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employeeSalary(
    @common.Param() params: EmployeeSalaryWhereUniqueInput
  ): Promise<EmployeeSalary | null> {
    const result = await this.service.employeeSalary({
      where: params,
      select: {
        createdAt: true,

        fiscalMonthId: {
          select: {
            id: true,
          },
        },

        id: true,
        netSalary: true,
        note: true,
        totalDeserved: true,
        totalDiscount: true,
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
  @swagger.ApiOkResponse({ type: EmployeeSalary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EmployeeSalary",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEmployeeSalary(
    @common.Param() params: EmployeeSalaryWhereUniqueInput,
    @common.Body() data: EmployeeSalaryUpdateInput
  ): Promise<EmployeeSalary | null> {
    try {
      return await this.service.updateEmployeeSalary({
        where: params,
        data: {
          ...data,

          fiscalMonthId: {
            connect: data.fiscalMonthId,
          },
        },
        select: {
          createdAt: true,

          fiscalMonthId: {
            select: {
              id: true,
            },
          },

          id: true,
          netSalary: true,
          note: true,
          totalDeserved: true,
          totalDiscount: true,
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
  @swagger.ApiOkResponse({ type: EmployeeSalary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EmployeeSalary",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEmployeeSalary(
    @common.Param() params: EmployeeSalaryWhereUniqueInput
  ): Promise<EmployeeSalary | null> {
    try {
      return await this.service.deleteEmployeeSalary({
        where: params,
        select: {
          createdAt: true,

          fiscalMonthId: {
            select: {
              id: true,
            },
          },

          id: true,
          netSalary: true,
          note: true,
          totalDeserved: true,
          totalDiscount: true,
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
