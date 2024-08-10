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
import { IncomeItemService } from "../incomeItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { IncomeItemCreateInput } from "./IncomeItemCreateInput";
import { IncomeItem } from "./IncomeItem";
import { IncomeItemFindManyArgs } from "./IncomeItemFindManyArgs";
import { IncomeItemWhereUniqueInput } from "./IncomeItemWhereUniqueInput";
import { IncomeItemUpdateInput } from "./IncomeItemUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class IncomeItemControllerBase {
  constructor(
    protected readonly service: IncomeItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: IncomeItem })
  @nestAccessControl.UseRoles({
    resource: "IncomeItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createIncomeItem(
    @common.Body() data: IncomeItemCreateInput
  ): Promise<IncomeItem> {
    return await this.service.createIncomeItem({
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
  @swagger.ApiOkResponse({ type: [IncomeItem] })
  @ApiNestedQuery(IncomeItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "IncomeItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async incomeItems(@common.Req() request: Request): Promise<IncomeItem[]> {
    const args = plainToClass(IncomeItemFindManyArgs, request.query);
    return this.service.incomeItems({
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
  @swagger.ApiOkResponse({ type: IncomeItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "IncomeItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async incomeItem(
    @common.Param() params: IncomeItemWhereUniqueInput
  ): Promise<IncomeItem | null> {
    const result = await this.service.incomeItem({
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
  @swagger.ApiOkResponse({ type: IncomeItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "IncomeItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateIncomeItem(
    @common.Param() params: IncomeItemWhereUniqueInput,
    @common.Body() data: IncomeItemUpdateInput
  ): Promise<IncomeItem | null> {
    try {
      return await this.service.updateIncomeItem({
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
  @swagger.ApiOkResponse({ type: IncomeItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "IncomeItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteIncomeItem(
    @common.Param() params: IncomeItemWhereUniqueInput
  ): Promise<IncomeItem | null> {
    try {
      return await this.service.deleteIncomeItem({
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
