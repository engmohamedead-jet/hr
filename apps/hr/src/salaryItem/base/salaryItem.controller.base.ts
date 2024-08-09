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
import { SalaryItemService } from "../salaryItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SalaryItemCreateInput } from "./SalaryItemCreateInput";
import { SalaryItem } from "./SalaryItem";
import { SalaryItemFindManyArgs } from "./SalaryItemFindManyArgs";
import { SalaryItemWhereUniqueInput } from "./SalaryItemWhereUniqueInput";
import { SalaryItemUpdateInput } from "./SalaryItemUpdateInput";
import { EmployeeClassSalaryItemValueFindManyArgs } from "../../employeeClassSalaryItemValue/base/EmployeeClassSalaryItemValueFindManyArgs";
import { EmployeeClassSalaryItemValue } from "../../employeeClassSalaryItemValue/base/EmployeeClassSalaryItemValue";
import { EmployeeClassSalaryItemValueWhereUniqueInput } from "../../employeeClassSalaryItemValue/base/EmployeeClassSalaryItemValueWhereUniqueInput";
import { EmployeeSalaryDetailFindManyArgs } from "../../employeeSalaryDetail/base/EmployeeSalaryDetailFindManyArgs";
import { EmployeeSalaryDetail } from "../../employeeSalaryDetail/base/EmployeeSalaryDetail";
import { EmployeeSalaryDetailWhereUniqueInput } from "../../employeeSalaryDetail/base/EmployeeSalaryDetailWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SalaryItemControllerBase {
  constructor(
    protected readonly service: SalaryItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SalaryItem })
  @nestAccessControl.UseRoles({
    resource: "SalaryItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSalaryItem(
    @common.Body() data: SalaryItemCreateInput
  ): Promise<SalaryItem> {
    return await this.service.createSalaryItem({
      data: data,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SalaryItem] })
  @ApiNestedQuery(SalaryItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SalaryItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async salaryItems(@common.Req() request: Request): Promise<SalaryItem[]> {
    const args = plainToClass(SalaryItemFindManyArgs, request.query);
    return this.service.salaryItems({
      ...args,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SalaryItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SalaryItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async salaryItem(
    @common.Param() params: SalaryItemWhereUniqueInput
  ): Promise<SalaryItem | null> {
    const result = await this.service.salaryItem({
      where: params,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
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
  @swagger.ApiOkResponse({ type: SalaryItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SalaryItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSalaryItem(
    @common.Param() params: SalaryItemWhereUniqueInput,
    @common.Body() data: SalaryItemUpdateInput
  ): Promise<SalaryItem | null> {
    try {
      return await this.service.updateSalaryItem({
        where: params,
        data: data,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          normalizedName: true,
          note: true,
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
  @swagger.ApiOkResponse({ type: SalaryItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SalaryItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSalaryItem(
    @common.Param() params: SalaryItemWhereUniqueInput
  ): Promise<SalaryItem | null> {
    try {
      return await this.service.deleteSalaryItem({
        where: params,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          normalizedName: true,
          note: true,
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
  @common.Get("/:id/employeeClassSalaryItemValues")
  @ApiNestedQuery(EmployeeClassSalaryItemValueFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EmployeeClassSalaryItemValue",
    action: "read",
    possession: "any",
  })
  async findEmployeeClassSalaryItemValues(
    @common.Req() request: Request,
    @common.Param() params: SalaryItemWhereUniqueInput
  ): Promise<EmployeeClassSalaryItemValue[]> {
    const query = plainToClass(
      EmployeeClassSalaryItemValueFindManyArgs,
      request.query
    );
    const results = await this.service.findEmployeeClassSalaryItemValues(
      params.id,
      {
        ...query,
        select: {
          createdAt: true,

          employeeClassId: {
            select: {
              id: true,
            },
          },

          id: true,
          itemValue: true,

          salaryItemId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/employeeClassSalaryItemValues")
  @nestAccessControl.UseRoles({
    resource: "SalaryItem",
    action: "update",
    possession: "any",
  })
  async connectEmployeeClassSalaryItemValues(
    @common.Param() params: SalaryItemWhereUniqueInput,
    @common.Body() body: EmployeeClassSalaryItemValueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employeeClassSalaryItemValues: {
        connect: body,
      },
    };
    await this.service.updateSalaryItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/employeeClassSalaryItemValues")
  @nestAccessControl.UseRoles({
    resource: "SalaryItem",
    action: "update",
    possession: "any",
  })
  async updateEmployeeClassSalaryItemValues(
    @common.Param() params: SalaryItemWhereUniqueInput,
    @common.Body() body: EmployeeClassSalaryItemValueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employeeClassSalaryItemValues: {
        set: body,
      },
    };
    await this.service.updateSalaryItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/employeeClassSalaryItemValues")
  @nestAccessControl.UseRoles({
    resource: "SalaryItem",
    action: "update",
    possession: "any",
  })
  async disconnectEmployeeClassSalaryItemValues(
    @common.Param() params: SalaryItemWhereUniqueInput,
    @common.Body() body: EmployeeClassSalaryItemValueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employeeClassSalaryItemValues: {
        disconnect: body,
      },
    };
    await this.service.updateSalaryItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/employeeSalaryDetails")
  @ApiNestedQuery(EmployeeSalaryDetailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EmployeeSalaryDetail",
    action: "read",
    possession: "any",
  })
  async findEmployeeSalaryDetails(
    @common.Req() request: Request,
    @common.Param() params: SalaryItemWhereUniqueInput
  ): Promise<EmployeeSalaryDetail[]> {
    const query = plainToClass(EmployeeSalaryDetailFindManyArgs, request.query);
    const results = await this.service.findEmployeeSalaryDetails(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        notes: true,

        salaryItemId: {
          select: {
            id: true,
          },
        },

        salaryItemValue: true,
        serial: true,
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

  @common.Post("/:id/employeeSalaryDetails")
  @nestAccessControl.UseRoles({
    resource: "SalaryItem",
    action: "update",
    possession: "any",
  })
  async connectEmployeeSalaryDetails(
    @common.Param() params: SalaryItemWhereUniqueInput,
    @common.Body() body: EmployeeSalaryDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employeeSalaryDetails: {
        connect: body,
      },
    };
    await this.service.updateSalaryItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/employeeSalaryDetails")
  @nestAccessControl.UseRoles({
    resource: "SalaryItem",
    action: "update",
    possession: "any",
  })
  async updateEmployeeSalaryDetails(
    @common.Param() params: SalaryItemWhereUniqueInput,
    @common.Body() body: EmployeeSalaryDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employeeSalaryDetails: {
        set: body,
      },
    };
    await this.service.updateSalaryItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/employeeSalaryDetails")
  @nestAccessControl.UseRoles({
    resource: "SalaryItem",
    action: "update",
    possession: "any",
  })
  async disconnectEmployeeSalaryDetails(
    @common.Param() params: SalaryItemWhereUniqueInput,
    @common.Body() body: EmployeeSalaryDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employeeSalaryDetails: {
        disconnect: body,
      },
    };
    await this.service.updateSalaryItem({
      where: params,
      data,
      select: { id: true },
    });
  }
}
