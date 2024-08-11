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
import { PaymentMethodService } from "../paymentMethod.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PaymentMethodCreateInput } from "./PaymentMethodCreateInput";
import { PaymentMethod } from "./PaymentMethod";
import { PaymentMethodFindManyArgs } from "./PaymentMethodFindManyArgs";
import { PaymentMethodWhereUniqueInput } from "./PaymentMethodWhereUniqueInput";
import { PaymentMethodUpdateInput } from "./PaymentMethodUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PaymentMethodControllerBase {
  constructor(
    protected readonly service: PaymentMethodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentMethod })
  @nestAccessControl.UseRoles({
    resource: "PaymentMethod",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPaymentMethod(
    @common.Body() data: PaymentMethodCreateInput
  ): Promise<PaymentMethod> {
    return await this.service.createPaymentMethod({
      data: data,
      select: {
        code: true,
        createdAt: true,
        id: true,
        isDefault: true,
        name: true,
        normalizedName: true,
        note: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentMethod] })
  @ApiNestedQuery(PaymentMethodFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentMethod",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paymentMethods(
    @common.Req() request: Request
  ): Promise<PaymentMethod[]> {
    const args = plainToClass(PaymentMethodFindManyArgs, request.query);
    return this.service.paymentMethods({
      ...args,
      select: {
        code: true,
        createdAt: true,
        id: true,
        isDefault: true,
        name: true,
        normalizedName: true,
        note: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentMethod",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paymentMethod(
    @common.Param() params: PaymentMethodWhereUniqueInput
  ): Promise<PaymentMethod | null> {
    const result = await this.service.paymentMethod({
      where: params,
      select: {
        code: true,
        createdAt: true,
        id: true,
        isDefault: true,
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
  @swagger.ApiOkResponse({ type: PaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentMethod",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePaymentMethod(
    @common.Param() params: PaymentMethodWhereUniqueInput,
    @common.Body() data: PaymentMethodUpdateInput
  ): Promise<PaymentMethod | null> {
    try {
      return await this.service.updatePaymentMethod({
        where: params,
        data: data,
        select: {
          code: true,
          createdAt: true,
          id: true,
          isDefault: true,
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
  @swagger.ApiOkResponse({ type: PaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentMethod",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePaymentMethod(
    @common.Param() params: PaymentMethodWhereUniqueInput
  ): Promise<PaymentMethod | null> {
    try {
      return await this.service.deletePaymentMethod({
        where: params,
        select: {
          code: true,
          createdAt: true,
          id: true,
          isDefault: true,
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
