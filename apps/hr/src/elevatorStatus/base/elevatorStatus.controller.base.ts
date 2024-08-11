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
import { ElevatorStatusService } from "../elevatorStatus.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ElevatorStatusCreateInput } from "./ElevatorStatusCreateInput";
import { ElevatorStatus } from "./ElevatorStatus";
import { ElevatorStatusFindManyArgs } from "./ElevatorStatusFindManyArgs";
import { ElevatorStatusWhereUniqueInput } from "./ElevatorStatusWhereUniqueInput";
import { ElevatorStatusUpdateInput } from "./ElevatorStatusUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ElevatorStatusControllerBase {
  constructor(
    protected readonly service: ElevatorStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ElevatorStatus })
  @nestAccessControl.UseRoles({
    resource: "ElevatorStatus",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createElevatorStatus(
    @common.Body() data: ElevatorStatusCreateInput
  ): Promise<ElevatorStatus> {
    return await this.service.createElevatorStatus({
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
  @swagger.ApiOkResponse({ type: [ElevatorStatus] })
  @ApiNestedQuery(ElevatorStatusFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ElevatorStatus",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async elevatorStatuses(
    @common.Req() request: Request
  ): Promise<ElevatorStatus[]> {
    const args = plainToClass(ElevatorStatusFindManyArgs, request.query);
    return this.service.elevatorStatuses({
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
  @swagger.ApiOkResponse({ type: ElevatorStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ElevatorStatus",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async elevatorStatus(
    @common.Param() params: ElevatorStatusWhereUniqueInput
  ): Promise<ElevatorStatus | null> {
    const result = await this.service.elevatorStatus({
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
  @swagger.ApiOkResponse({ type: ElevatorStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ElevatorStatus",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateElevatorStatus(
    @common.Param() params: ElevatorStatusWhereUniqueInput,
    @common.Body() data: ElevatorStatusUpdateInput
  ): Promise<ElevatorStatus | null> {
    try {
      return await this.service.updateElevatorStatus({
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
  @swagger.ApiOkResponse({ type: ElevatorStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ElevatorStatus",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteElevatorStatus(
    @common.Param() params: ElevatorStatusWhereUniqueInput
  ): Promise<ElevatorStatus | null> {
    try {
      return await this.service.deleteElevatorStatus({
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
}
