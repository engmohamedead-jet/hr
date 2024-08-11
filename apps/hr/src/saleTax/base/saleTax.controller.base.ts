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
import { SaleTaxService } from "../saleTax.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SaleTaxCreateInput } from "./SaleTaxCreateInput";
import { SaleTax } from "./SaleTax";
import { SaleTaxFindManyArgs } from "./SaleTaxFindManyArgs";
import { SaleTaxWhereUniqueInput } from "./SaleTaxWhereUniqueInput";
import { SaleTaxUpdateInput } from "./SaleTaxUpdateInput";
import { ProductGroupFindManyArgs } from "../../productGroup/base/ProductGroupFindManyArgs";
import { ProductGroup } from "../../productGroup/base/ProductGroup";
import { ProductGroupWhereUniqueInput } from "../../productGroup/base/ProductGroupWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SaleTaxControllerBase {
  constructor(
    protected readonly service: SaleTaxService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SaleTax })
  @nestAccessControl.UseRoles({
    resource: "SaleTax",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSaleTax(
    @common.Body() data: SaleTaxCreateInput
  ): Promise<SaleTax> {
    return await this.service.createSaleTax({
      data: {
        ...data,

        store: data.store
          ? {
              connect: data.store,
            }
          : undefined,
      },
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isExemption: true,
        name: true,
        normalizedName: true,
        note: true,
        rate: true,

        store: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SaleTax] })
  @ApiNestedQuery(SaleTaxFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SaleTax",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async saleTaxes(@common.Req() request: Request): Promise<SaleTax[]> {
    const args = plainToClass(SaleTaxFindManyArgs, request.query);
    return this.service.saleTaxes({
      ...args,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isExemption: true,
        name: true,
        normalizedName: true,
        note: true,
        rate: true,

        store: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SaleTax })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SaleTax",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async saleTax(
    @common.Param() params: SaleTaxWhereUniqueInput
  ): Promise<SaleTax | null> {
    const result = await this.service.saleTax({
      where: params,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isExemption: true,
        name: true,
        normalizedName: true,
        note: true,
        rate: true,

        store: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: SaleTax })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SaleTax",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSaleTax(
    @common.Param() params: SaleTaxWhereUniqueInput,
    @common.Body() data: SaleTaxUpdateInput
  ): Promise<SaleTax | null> {
    try {
      return await this.service.updateSaleTax({
        where: params,
        data: {
          ...data,

          store: data.store
            ? {
                connect: data.store,
              }
            : undefined,
        },
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          isExemption: true,
          name: true,
          normalizedName: true,
          note: true,
          rate: true,

          store: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: SaleTax })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SaleTax",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSaleTax(
    @common.Param() params: SaleTaxWhereUniqueInput
  ): Promise<SaleTax | null> {
    try {
      return await this.service.deleteSaleTax({
        where: params,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          isExemption: true,
          name: true,
          normalizedName: true,
          note: true,
          rate: true,

          store: {
            select: {
              id: true,
            },
          },

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
  @common.Get("/:id/productGroups")
  @ApiNestedQuery(ProductGroupFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async findProductGroups(
    @common.Req() request: Request,
    @common.Param() params: SaleTaxWhereUniqueInput
  ): Promise<ProductGroup[]> {
    const query = plainToClass(ProductGroupFindManyArgs, request.query);
    const results = await this.service.findProductGroups(params.id, {
      ...query,
      select: {
        PurchaseDiscountAccountId: {
          select: {
            id: true,
          },
        },

        SaleReturnAccountId: {
          select: {
            id: true,
          },
        },

        account: {
          select: {
            id: true,
          },
        },

        code: true,
        createdAt: true,
        description: true,
        excludeFromPurchase: true,
        excludeFromSale: true,
        id: true,

        inventoryAccountId: {
          select: {
            id: true,
          },
        },

        isDefault: true,
        name: true,
        normalizedName: true,
        notes: true,

        productGroups: {
          select: {
            id: true,
          },
        },

        purchaseAccountId: {
          select: {
            id: true,
          },
        },

        purchaseReturnAccountId: {
          select: {
            id: true,
          },
        },

        saleAccountId: {
          select: {
            id: true,
          },
        },

        saleDiscountAccountId: {
          select: {
            id: true,
          },
        },

        saleTaxId: {
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

  @common.Post("/:id/productGroups")
  @nestAccessControl.UseRoles({
    resource: "SaleTax",
    action: "update",
    possession: "any",
  })
  async connectProductGroups(
    @common.Param() params: SaleTaxWhereUniqueInput,
    @common.Body() body: ProductGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productGroups: {
        connect: body,
      },
    };
    await this.service.updateSaleTax({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/productGroups")
  @nestAccessControl.UseRoles({
    resource: "SaleTax",
    action: "update",
    possession: "any",
  })
  async updateProductGroups(
    @common.Param() params: SaleTaxWhereUniqueInput,
    @common.Body() body: ProductGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productGroups: {
        set: body,
      },
    };
    await this.service.updateSaleTax({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/productGroups")
  @nestAccessControl.UseRoles({
    resource: "SaleTax",
    action: "update",
    possession: "any",
  })
  async disconnectProductGroups(
    @common.Param() params: SaleTaxWhereUniqueInput,
    @common.Body() body: ProductGroupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productGroups: {
        disconnect: body,
      },
    };
    await this.service.updateSaleTax({
      where: params,
      data,
      select: { id: true },
    });
  }
}