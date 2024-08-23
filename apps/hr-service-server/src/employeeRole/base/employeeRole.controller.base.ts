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
import { EmployeeRoleService } from "../employeeRole.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EmployeeRoleCreateInput } from "./EmployeeRoleCreateInput";
import { EmployeeRole } from "./EmployeeRole";
import { EmployeeRoleFindManyArgs } from "./EmployeeRoleFindManyArgs";
import { EmployeeRoleWhereUniqueInput } from "./EmployeeRoleWhereUniqueInput";
import { EmployeeRoleUpdateInput } from "./EmployeeRoleUpdateInput";
import { EmployeeFindManyArgs } from "../../employee/base/EmployeeFindManyArgs";
import { Employee } from "../../employee/base/Employee";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EmployeeRoleControllerBase {
  constructor(
    protected readonly service: EmployeeRoleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmployeeRole })
  @nestAccessControl.UseRoles({
    resource: "EmployeeRole",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEmployeeRole(
    @common.Body() data: EmployeeRoleCreateInput
  ): Promise<EmployeeRole> {
    return await this.service.createEmployeeRole({
      data: {
        ...data,

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
  @swagger.ApiOkResponse({ type: [EmployeeRole] })
  @ApiNestedQuery(EmployeeRoleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EmployeeRole",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employeeRoles(@common.Req() request: Request): Promise<EmployeeRole[]> {
    const args = plainToClass(EmployeeRoleFindManyArgs, request.query);
    return this.service.employeeRoles({
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
  @swagger.ApiOkResponse({ type: EmployeeRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EmployeeRole",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employeeRole(
    @common.Param() params: EmployeeRoleWhereUniqueInput
  ): Promise<EmployeeRole | null> {
    const result = await this.service.employeeRole({
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
  @swagger.ApiOkResponse({ type: EmployeeRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EmployeeRole",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEmployeeRole(
    @common.Param() params: EmployeeRoleWhereUniqueInput,
    @common.Body() data: EmployeeRoleUpdateInput
  ): Promise<EmployeeRole | null> {
    try {
      return await this.service.updateEmployeeRole({
        where: params,
        data: {
          ...data,

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
  @swagger.ApiOkResponse({ type: EmployeeRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EmployeeRole",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEmployeeRole(
    @common.Param() params: EmployeeRoleWhereUniqueInput
  ): Promise<EmployeeRole | null> {
    try {
      return await this.service.deleteEmployeeRole({
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/employees")
  @ApiNestedQuery(EmployeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async findEmployees(
    @common.Req() request: Request,
    @common.Param() params: EmployeeRoleWhereUniqueInput
  ): Promise<Employee[]> {
    const query = plainToClass(EmployeeFindManyArgs, request.query);
    const results = await this.service.findEmployees(params.id, {
      ...query,
      select: {
        balance: true,
        code: true,
        createdAt: true,

        employeeDepartmentId: {
          select: {
            id: true,
          },
        },

        employeeGroup: {
          select: {
            id: true,
          },
        },

        employeeRoleId: {
          select: {
            id: true,
          },
        },

        hireDate: true,
        id: true,
        isActive: true,

        jobTitle: {
          select: {
            id: true,
          },
        },

        lastYearBalance: true,
        name: true,
        note: true,
        remainingBalance: true,

        tenantId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        usedBalance: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/employees")
  @nestAccessControl.UseRoles({
    resource: "EmployeeRole",
    action: "update",
    possession: "any",
  })
  async connectEmployees(
    @common.Param() params: EmployeeRoleWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        connect: body,
      },
    };
    await this.service.updateEmployeeRole({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/employees")
  @nestAccessControl.UseRoles({
    resource: "EmployeeRole",
    action: "update",
    possession: "any",
  })
  async updateEmployees(
    @common.Param() params: EmployeeRoleWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        set: body,
      },
    };
    await this.service.updateEmployeeRole({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/employees")
  @nestAccessControl.UseRoles({
    resource: "EmployeeRole",
    action: "update",
    possession: "any",
  })
  async disconnectEmployees(
    @common.Param() params: EmployeeRoleWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        disconnect: body,
      },
    };
    await this.service.updateEmployeeRole({
      where: params,
      data,
      select: { id: true },
    });
  }
}