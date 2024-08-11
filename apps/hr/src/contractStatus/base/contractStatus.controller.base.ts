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
import { ContractStatusService } from "../contractStatus.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ContractStatusCreateInput } from "./ContractStatusCreateInput";
import { ContractStatus } from "./ContractStatus";
import { ContractStatusFindManyArgs } from "./ContractStatusFindManyArgs";
import { ContractStatusWhereUniqueInput } from "./ContractStatusWhereUniqueInput";
import { ContractStatusUpdateInput } from "./ContractStatusUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ContractStatusControllerBase {
  constructor(
    protected readonly service: ContractStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ContractStatus })
  @nestAccessControl.UseRoles({
    resource: "ContractStatus",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createContractStatus(
    @common.Body() data: ContractStatusCreateInput
  ): Promise<ContractStatus> {
    return await this.service.createContractStatus({
      data: {
        ...data,

        installationContracts: data.installationContracts
          ? {
              connect: data.installationContracts,
            }
          : undefined,
      },
      select: {
        Codec: true,
        code: true,
        createdAt: true,
        description: true,
        id: true,

        installationContracts: {
          select: {
            id: true,
          },
        },

        isActive: true,
        name: true,
        note: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ContractStatus] })
  @ApiNestedQuery(ContractStatusFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ContractStatus",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contractStatuses(
    @common.Req() request: Request
  ): Promise<ContractStatus[]> {
    const args = plainToClass(ContractStatusFindManyArgs, request.query);
    return this.service.contractStatuses({
      ...args,
      select: {
        Codec: true,
        code: true,
        createdAt: true,
        description: true,
        id: true,

        installationContracts: {
          select: {
            id: true,
          },
        },

        isActive: true,
        name: true,
        note: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ContractStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ContractStatus",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contractStatus(
    @common.Param() params: ContractStatusWhereUniqueInput
  ): Promise<ContractStatus | null> {
    const result = await this.service.contractStatus({
      where: params,
      select: {
        Codec: true,
        code: true,
        createdAt: true,
        description: true,
        id: true,

        installationContracts: {
          select: {
            id: true,
          },
        },

        isActive: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: ContractStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ContractStatus",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateContractStatus(
    @common.Param() params: ContractStatusWhereUniqueInput,
    @common.Body() data: ContractStatusUpdateInput
  ): Promise<ContractStatus | null> {
    try {
      return await this.service.updateContractStatus({
        where: params,
        data: {
          ...data,

          installationContracts: data.installationContracts
            ? {
                connect: data.installationContracts,
              }
            : undefined,
        },
        select: {
          Codec: true,
          code: true,
          createdAt: true,
          description: true,
          id: true,

          installationContracts: {
            select: {
              id: true,
            },
          },

          isActive: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: ContractStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ContractStatus",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteContractStatus(
    @common.Param() params: ContractStatusWhereUniqueInput
  ): Promise<ContractStatus | null> {
    try {
      return await this.service.deleteContractStatus({
        where: params,
        select: {
          Codec: true,
          code: true,
          createdAt: true,
          description: true,
          id: true,

          installationContracts: {
            select: {
              id: true,
            },
          },

          isActive: true,
          name: true,
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