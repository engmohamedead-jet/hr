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
import { AttributeValueService } from "../attributeValue.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AttributeValueCreateInput } from "./AttributeValueCreateInput";
import { AttributeValue } from "./AttributeValue";
import { AttributeValueFindManyArgs } from "./AttributeValueFindManyArgs";
import { AttributeValueWhereUniqueInput } from "./AttributeValueWhereUniqueInput";
import { AttributeValueUpdateInput } from "./AttributeValueUpdateInput";
import { ProductVariantFindManyArgs } from "../../productVariant/base/ProductVariantFindManyArgs";
import { ProductVariant } from "../../productVariant/base/ProductVariant";
import { ProductVariantWhereUniqueInput } from "../../productVariant/base/ProductVariantWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AttributeValueControllerBase {
  constructor(
    protected readonly service: AttributeValueService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AttributeValue })
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAttributeValue(
    @common.Body() data: AttributeValueCreateInput
  ): Promise<AttributeValue> {
    return await this.service.createAttributeValue({
      data: {
        ...data,

        attributeId: {
          connect: data.attributeId,
        },

        tenantId: data.tenantId
          ? {
              connect: data.tenantId,
            }
          : undefined,
      },
      select: {
        attributeId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isActive: true,
        note: true,

        tenantId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AttributeValue] })
  @ApiNestedQuery(AttributeValueFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async attributeValues(
    @common.Req() request: Request
  ): Promise<AttributeValue[]> {
    const args = plainToClass(AttributeValueFindManyArgs, request.query);
    return this.service.attributeValues({
      ...args,
      select: {
        attributeId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isActive: true,
        note: true,

        tenantId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AttributeValue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async attributeValue(
    @common.Param() params: AttributeValueWhereUniqueInput
  ): Promise<AttributeValue | null> {
    const result = await this.service.attributeValue({
      where: params,
      select: {
        attributeId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isActive: true,
        note: true,

        tenantId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
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
  @swagger.ApiOkResponse({ type: AttributeValue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAttributeValue(
    @common.Param() params: AttributeValueWhereUniqueInput,
    @common.Body() data: AttributeValueUpdateInput
  ): Promise<AttributeValue | null> {
    try {
      return await this.service.updateAttributeValue({
        where: params,
        data: {
          ...data,

          attributeId: {
            connect: data.attributeId,
          },

          tenantId: data.tenantId
            ? {
                connect: data.tenantId,
              }
            : undefined,
        },
        select: {
          attributeId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          isActive: true,
          note: true,

          tenantId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          value: true,
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
  @swagger.ApiOkResponse({ type: AttributeValue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAttributeValue(
    @common.Param() params: AttributeValueWhereUniqueInput
  ): Promise<AttributeValue | null> {
    try {
      return await this.service.deleteAttributeValue({
        where: params,
        select: {
          attributeId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          isActive: true,
          note: true,

          tenantId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          value: true,
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
  @common.Get("/:id/productVariants")
  @ApiNestedQuery(ProductVariantFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProductVariant",
    action: "read",
    possession: "any",
  })
  async findProductVariants(
    @common.Req() request: Request,
    @common.Param() params: AttributeValueWhereUniqueInput
  ): Promise<ProductVariant[]> {
    const query = plainToClass(ProductVariantFindManyArgs, request.query);
    const results = await this.service.findProductVariants(params.id, {
      ...query,
      select: {
        attributeValueId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isActive: true,
        note: true,

        productId: {
          select: {
            id: true,
          },
        },

        tenantId: {
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

  @common.Post("/:id/productVariants")
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "update",
    possession: "any",
  })
  async connectProductVariants(
    @common.Param() params: AttributeValueWhereUniqueInput,
    @common.Body() body: ProductVariantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productVariants: {
        connect: body,
      },
    };
    await this.service.updateAttributeValue({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/productVariants")
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "update",
    possession: "any",
  })
  async updateProductVariants(
    @common.Param() params: AttributeValueWhereUniqueInput,
    @common.Body() body: ProductVariantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productVariants: {
        set: body,
      },
    };
    await this.service.updateAttributeValue({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/productVariants")
  @nestAccessControl.UseRoles({
    resource: "AttributeValue",
    action: "update",
    possession: "any",
  })
  async disconnectProductVariants(
    @common.Param() params: AttributeValueWhereUniqueInput,
    @common.Body() body: ProductVariantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productVariants: {
        disconnect: body,
      },
    };
    await this.service.updateAttributeValue({
      where: params,
      data,
      select: { id: true },
    });
  }
}
