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
import { CashTransferService } from "../cashTransfer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CashTransferCreateInput } from "./CashTransferCreateInput";
import { CashTransfer } from "./CashTransfer";
import { CashTransferFindManyArgs } from "./CashTransferFindManyArgs";
import { CashTransferWhereUniqueInput } from "./CashTransferWhereUniqueInput";
import { CashTransferUpdateInput } from "./CashTransferUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CashTransferControllerBase {
  constructor(
    protected readonly service: CashTransferService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CashTransfer })
  @nestAccessControl.UseRoles({
    resource: "CashTransfer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCashTransfer(
    @common.Body() data: CashTransferCreateInput
  ): Promise<CashTransfer> {
    return await this.service.createCashTransfer({
      data: data,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        note: true,
        referenceNumber: true,
        statementReference: true,
        transferDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CashTransfer] })
  @ApiNestedQuery(CashTransferFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CashTransfer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cashTransfers(@common.Req() request: Request): Promise<CashTransfer[]> {
    const args = plainToClass(CashTransferFindManyArgs, request.query);
    return this.service.cashTransfers({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        note: true,
        referenceNumber: true,
        statementReference: true,
        transferDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CashTransfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CashTransfer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cashTransfer(
    @common.Param() params: CashTransferWhereUniqueInput
  ): Promise<CashTransfer | null> {
    const result = await this.service.cashTransfer({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        note: true,
        referenceNumber: true,
        statementReference: true,
        transferDate: true,
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
  @swagger.ApiOkResponse({ type: CashTransfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CashTransfer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCashTransfer(
    @common.Param() params: CashTransferWhereUniqueInput,
    @common.Body() data: CashTransferUpdateInput
  ): Promise<CashTransfer | null> {
    try {
      return await this.service.updateCashTransfer({
        where: params,
        data: data,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          note: true,
          referenceNumber: true,
          statementReference: true,
          transferDate: true,
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
  @swagger.ApiOkResponse({ type: CashTransfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CashTransfer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCashTransfer(
    @common.Param() params: CashTransferWhereUniqueInput
  ): Promise<CashTransfer | null> {
    try {
      return await this.service.deleteCashTransfer({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,
          note: true,
          referenceNumber: true,
          statementReference: true,
          transferDate: true,
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