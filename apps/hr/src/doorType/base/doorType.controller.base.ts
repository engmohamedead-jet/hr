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
import { DoorTypeService } from "../doorType.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DoorTypeCreateInput } from "./DoorTypeCreateInput";
import { DoorType } from "./DoorType";
import { DoorTypeFindManyArgs } from "./DoorTypeFindManyArgs";
import { DoorTypeWhereUniqueInput } from "./DoorTypeWhereUniqueInput";
import { DoorTypeUpdateInput } from "./DoorTypeUpdateInput";
import { ElevatorFindManyArgs } from "../../elevator/base/ElevatorFindManyArgs";
import { Elevator } from "../../elevator/base/Elevator";
import { ElevatorWhereUniqueInput } from "../../elevator/base/ElevatorWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DoorTypeControllerBase {
  constructor(
    protected readonly service: DoorTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DoorType })
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDoorType(
    @common.Body() data: DoorTypeCreateInput
  ): Promise<DoorType> {
    return await this.service.createDoorType({
      data: data,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        normalizedName: true,
        notes: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DoorType] })
  @ApiNestedQuery(DoorTypeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async doorTypes(@common.Req() request: Request): Promise<DoorType[]> {
    const args = plainToClass(DoorTypeFindManyArgs, request.query);
    return this.service.doorTypes({
      ...args,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        normalizedName: true,
        notes: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DoorType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async doorType(
    @common.Param() params: DoorTypeWhereUniqueInput
  ): Promise<DoorType | null> {
    const result = await this.service.doorType({
      where: params,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        normalizedName: true,
        notes: true,
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
  @swagger.ApiOkResponse({ type: DoorType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDoorType(
    @common.Param() params: DoorTypeWhereUniqueInput,
    @common.Body() data: DoorTypeUpdateInput
  ): Promise<DoorType | null> {
    try {
      return await this.service.updateDoorType({
        where: params,
        data: data,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          normalizedName: true,
          notes: true,
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
  @swagger.ApiOkResponse({ type: DoorType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDoorType(
    @common.Param() params: DoorTypeWhereUniqueInput
  ): Promise<DoorType | null> {
    try {
      return await this.service.deleteDoorType({
        where: params,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          normalizedName: true,
          notes: true,
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
    @common.Param() params: DoorTypeWhereUniqueInput
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
    resource: "DoorType",
    action: "update",
    possession: "any",
  })
  async connectElevators(
    @common.Param() params: DoorTypeWhereUniqueInput,
    @common.Body() body: ElevatorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      elevators: {
        connect: body,
      },
    };
    await this.service.updateDoorType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/elevators")
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "update",
    possession: "any",
  })
  async updateElevators(
    @common.Param() params: DoorTypeWhereUniqueInput,
    @common.Body() body: ElevatorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      elevators: {
        set: body,
      },
    };
    await this.service.updateDoorType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/elevators")
  @nestAccessControl.UseRoles({
    resource: "DoorType",
    action: "update",
    possession: "any",
  })
  async disconnectElevators(
    @common.Param() params: DoorTypeWhereUniqueInput,
    @common.Body() body: ElevatorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      elevators: {
        disconnect: body,
      },
    };
    await this.service.updateDoorType({
      where: params,
      data,
      select: { id: true },
    });
  }
}