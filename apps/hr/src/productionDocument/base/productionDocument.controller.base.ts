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
import { ProductionDocumentService } from "../productionDocument.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductionDocumentCreateInput } from "./ProductionDocumentCreateInput";
import { ProductionDocument } from "./ProductionDocument";
import { ProductionDocumentFindManyArgs } from "./ProductionDocumentFindManyArgs";
import { ProductionDocumentWhereUniqueInput } from "./ProductionDocumentWhereUniqueInput";
import { ProductionDocumentUpdateInput } from "./ProductionDocumentUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductionDocumentControllerBase {
  constructor(
    protected readonly service: ProductionDocumentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductionDocument })
  @nestAccessControl.UseRoles({
    resource: "ProductionDocument",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProductionDocument(
    @common.Body() data: ProductionDocumentCreateInput
  ): Promise<ProductionDocument> {
    return await this.service.createProductionDocument({
      data: data,
      select: {
        createdAt: true,
        id: true,
        isActive: true,
        note: true,
        priority: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductionDocument] })
  @ApiNestedQuery(ProductionDocumentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProductionDocument",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async productionDocuments(
    @common.Req() request: Request
  ): Promise<ProductionDocument[]> {
    const args = plainToClass(ProductionDocumentFindManyArgs, request.query);
    return this.service.productionDocuments({
      ...args,
      select: {
        createdAt: true,
        id: true,
        isActive: true,
        note: true,
        priority: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductionDocument })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductionDocument",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async productionDocument(
    @common.Param() params: ProductionDocumentWhereUniqueInput
  ): Promise<ProductionDocument | null> {
    const result = await this.service.productionDocument({
      where: params,
      select: {
        createdAt: true,
        id: true,
        isActive: true,
        note: true,
        priority: true,
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
  @swagger.ApiOkResponse({ type: ProductionDocument })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductionDocument",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProductionDocument(
    @common.Param() params: ProductionDocumentWhereUniqueInput,
    @common.Body() data: ProductionDocumentUpdateInput
  ): Promise<ProductionDocument | null> {
    try {
      return await this.service.updateProductionDocument({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          isActive: true,
          note: true,
          priority: true,
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
  @swagger.ApiOkResponse({ type: ProductionDocument })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProductionDocument",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProductionDocument(
    @common.Param() params: ProductionDocumentWhereUniqueInput
  ): Promise<ProductionDocument | null> {
    try {
      return await this.service.deleteProductionDocument({
        where: params,
        select: {
          createdAt: true,
          id: true,
          isActive: true,
          note: true,
          priority: true,
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
