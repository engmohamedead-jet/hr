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
import { DepartmentService } from "../department.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DepartmentCreateInput } from "./DepartmentCreateInput";
import { Department } from "./Department";
import { DepartmentFindManyArgs } from "./DepartmentFindManyArgs";
import { DepartmentWhereUniqueInput } from "./DepartmentWhereUniqueInput";
import { DepartmentUpdateInput } from "./DepartmentUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DepartmentControllerBase {
  constructor(
    protected readonly service: DepartmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Department })
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDepartment(
    @common.Body() data: DepartmentCreateInput
  ): Promise<Department> {
    return await this.service.createDepartment({
      data: {
        ...data,

        departmentId: data.departmentId
          ? {
              connect: data.departmentId,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        departmentId: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        noteJson: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Department] })
  @ApiNestedQuery(DepartmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async departments(@common.Req() request: Request): Promise<Department[]> {
    const args = plainToClass(DepartmentFindManyArgs, request.query);
    return this.service.departments({
      ...args,
      select: {
        createdAt: true,

        departmentId: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        noteJson: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Department })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async department(
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Department | null> {
    const result = await this.service.department({
      where: params,
      select: {
        createdAt: true,

        departmentId: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        noteJson: true,
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
  @swagger.ApiOkResponse({ type: Department })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDepartment(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() data: DepartmentUpdateInput
  ): Promise<Department | null> {
    try {
      return await this.service.updateDepartment({
        where: params,
        data: {
          ...data,

          departmentId: data.departmentId
            ? {
                connect: data.departmentId,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          departmentId: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
          name: true,
          normalizedName: true,
          note: true,
          noteJson: true,
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
  @swagger.ApiOkResponse({ type: Department })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDepartment(
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Department | null> {
    try {
      return await this.service.deleteDepartment({
        where: params,
        select: {
          createdAt: true,

          departmentId: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
          name: true,
          normalizedName: true,
          note: true,
          noteJson: true,
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
  @common.Get("/:id/departments")
  @ApiNestedQuery(DepartmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "read",
    possession: "any",
  })
  async findDepartments(
    @common.Req() request: Request,
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Department[]> {
    const query = plainToClass(DepartmentFindManyArgs, request.query);
    const results = await this.service.findDepartments(params.id, {
      ...query,
      select: {
        createdAt: true,

        departmentId: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        noteJson: true,
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

  @common.Post("/:id/departments")
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  async connectDepartments(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: DepartmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      departments: {
        connect: body,
      },
    };
    await this.service.updateDepartment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/departments")
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  async updateDepartments(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: DepartmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      departments: {
        set: body,
      },
    };
    await this.service.updateDepartment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/departments")
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "update",
    possession: "any",
  })
  async disconnectDepartments(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: DepartmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      departments: {
        disconnect: body,
      },
    };
    await this.service.updateDepartment({
      where: params,
      data,
      select: { id: true },
    });
  }
}