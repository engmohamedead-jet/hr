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
import { ControlTypeService } from "../controlType.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ControlTypeCreateInput } from "./ControlTypeCreateInput";
import { ControlType } from "./ControlType";
import { ControlTypeFindManyArgs } from "./ControlTypeFindManyArgs";
import { ControlTypeWhereUniqueInput } from "./ControlTypeWhereUniqueInput";
import { ControlTypeUpdateInput } from "./ControlTypeUpdateInput";
import { ElevatorFindManyArgs } from "../../elevator/base/ElevatorFindManyArgs";
import { Elevator } from "../../elevator/base/Elevator";
import { ElevatorWhereUniqueInput } from "../../elevator/base/ElevatorWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ControlTypeControllerBase {
  constructor(
    protected readonly service: ControlTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ControlType })
  @nestAccessControl.UseRoles({
    resource: "ControlType",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createControlType(
    @common.Body() data: ControlTypeCreateInput
  ): Promise<ControlType> {
    return await this.service.createControlType({
      data: data,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        note: true,
        noted: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ControlType] })
  @ApiNestedQuery(ControlTypeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ControlType",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async controlTypes(@common.Req() request: Request): Promise<ControlType[]> {
    const args = plainToClass(ControlTypeFindManyArgs, request.query);
    return this.service.controlTypes({
      ...args,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        note: true,
        noted: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ControlType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ControlType",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async controlType(
    @common.Param() params: ControlTypeWhereUniqueInput
  ): Promise<ControlType | null> {
    const result = await this.service.controlType({
      where: params,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        note: true,
        noted: true,
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
  @swagger.ApiOkResponse({ type: ControlType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ControlType",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateControlType(
    @common.Param() params: ControlTypeWhereUniqueInput,
    @common.Body() data: ControlTypeUpdateInput
  ): Promise<ControlType | null> {
    try {
      return await this.service.updateControlType({
        where: params,
        data: data,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
          name: true,
          note: true,
          noted: true,
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
  @swagger.ApiOkResponse({ type: ControlType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ControlType",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteControlType(
    @common.Param() params: ControlTypeWhereUniqueInput
  ): Promise<ControlType | null> {
    try {
      return await this.service.deleteControlType({
        where: params,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
          name: true,
          note: true,
          noted: true,
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
  @common.Get("/:id/elevators")
  @ApiNestedQuery(ElevatorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Elevator",
    action: "read",
    possession: "any",
  })
  async findElevators(
    @common.Req() request: Request,
    @common.Param() params: ControlTypeWhereUniqueInput
  ): Promise<Elevator[]> {
    const query = plainToClass(ElevatorFindManyArgs, request.query);
    const results = await this.service.findElevators(params.id, {
      ...query,
      select: {
        bannerSize: true,
        cabinetSize: true,
        code: true,

        controlTypeId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        doorSize: true,

        doorTypeId: {
          select: {
            id: true,
          },
        },

        elevatorTypeId: {
          select: {
            id: true,
          },
        },

        freight: true,
        id: true,
        motorPower: true,

        motorTypeId: {
          select: {
            id: true,
          },
        },

        name: true,
        normalizedName: true,
        personsCount: true,
        stationsCount: true,

        storeId: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/elevators")
  @nestAccessControl.UseRoles({
    resource: "ControlType",
    action: "update",
    possession: "any",
  })
  async connectElevators(
    @common.Param() params: ControlTypeWhereUniqueInput,
    @common.Body() body: ElevatorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      elevators: {
        connect: body,
      },
    };
    await this.service.updateControlType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/elevators")
  @nestAccessControl.UseRoles({
    resource: "ControlType",
    action: "update",
    possession: "any",
  })
  async updateElevators(
    @common.Param() params: ControlTypeWhereUniqueInput,
    @common.Body() body: ElevatorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      elevators: {
        set: body,
      },
    };
    await this.service.updateControlType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/elevators")
  @nestAccessControl.UseRoles({
    resource: "ControlType",
    action: "update",
    possession: "any",
  })
  async disconnectElevators(
    @common.Param() params: ControlTypeWhereUniqueInput,
    @common.Body() body: ElevatorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      elevators: {
        disconnect: body,
      },
    };
    await this.service.updateControlType({
      where: params,
      data,
      select: { id: true },
    });
  }
}