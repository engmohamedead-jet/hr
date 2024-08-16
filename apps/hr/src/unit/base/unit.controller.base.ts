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
import { UnitService } from "../unit.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UnitCreateInput } from "./UnitCreateInput";
import { Unit } from "./Unit";
import { UnitFindManyArgs } from "./UnitFindManyArgs";
import { UnitWhereUniqueInput } from "./UnitWhereUniqueInput";
import { UnitUpdateInput } from "./UnitUpdateInput";
import { BillOfMaterialDetailFindManyArgs } from "../../billOfMaterialDetail/base/BillOfMaterialDetailFindManyArgs";
import { BillOfMaterialDetail } from "../../billOfMaterialDetail/base/BillOfMaterialDetail";
import { BillOfMaterialDetailWhereUniqueInput } from "../../billOfMaterialDetail/base/BillOfMaterialDetailWhereUniqueInput";
import { BillOfMaterialFindManyArgs } from "../../billOfMaterial/base/BillOfMaterialFindManyArgs";
import { BillOfMaterial } from "../../billOfMaterial/base/BillOfMaterial";
import { BillOfMaterialWhereUniqueInput } from "../../billOfMaterial/base/BillOfMaterialWhereUniqueInput";
import { ProductionOrderFindManyArgs } from "../../productionOrder/base/ProductionOrderFindManyArgs";
import { ProductionOrder } from "../../productionOrder/base/ProductionOrder";
import { ProductionOrderWhereUniqueInput } from "../../productionOrder/base/ProductionOrderWhereUniqueInput";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UnitControllerBase {
  constructor(
    protected readonly service: UnitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Unit })
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUnit(@common.Body() data: UnitCreateInput): Promise<Unit> {
    return await this.service.createUnit({
      data: data,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isCompound: true,
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
  @swagger.ApiOkResponse({ type: [Unit] })
  @ApiNestedQuery(UnitFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async units(@common.Req() request: Request): Promise<Unit[]> {
    const args = plainToClass(UnitFindManyArgs, request.query);
    return this.service.units({
      ...args,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isCompound: true,
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
  @swagger.ApiOkResponse({ type: Unit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async unit(
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<Unit | null> {
    const result = await this.service.unit({
      where: params,
      select: {
        code: true,
        createdAt: true,
        description: true,
        id: true,
        isCompound: true,
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
  @swagger.ApiOkResponse({ type: Unit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUnit(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() data: UnitUpdateInput
  ): Promise<Unit | null> {
    try {
      return await this.service.updateUnit({
        where: params,
        data: data,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          isCompound: true,
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
  @swagger.ApiOkResponse({ type: Unit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUnit(
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<Unit | null> {
    try {
      return await this.service.deleteUnit({
        where: params,
        select: {
          code: true,
          createdAt: true,
          description: true,
          id: true,
          isCompound: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/billOfMaterialDetails")
  @ApiNestedQuery(BillOfMaterialDetailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BillOfMaterialDetail",
    action: "read",
    possession: "any",
  })
  async findBillOfMaterialDetails(
    @common.Req() request: Request,
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<BillOfMaterialDetail[]> {
    const query = plainToClass(BillOfMaterialDetailFindManyArgs, request.query);
    const results = await this.service.findBillOfMaterialDetails(params.id, {
      ...query,
      select: {
        billOfMaterial: {
          select: {
            id: true,
          },
        },

        costShare: true,
        createdAt: true,
        id: true,
        isActive: true,
        isManualConsumption: true,
        note: true,

        productId: {
          select: {
            id: true,
          },
        },

        productVariantId: {
          select: {
            id: true,
          },
        },

        quantity: true,
        sequence: true,

        unitId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        workCenterRoutingId: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/billOfMaterialDetails")
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  async connectBillOfMaterialDetails(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: BillOfMaterialDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billOfMaterialDetails: {
        connect: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/billOfMaterialDetails")
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  async updateBillOfMaterialDetails(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: BillOfMaterialDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billOfMaterialDetails: {
        set: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/billOfMaterialDetails")
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  async disconnectBillOfMaterialDetails(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: BillOfMaterialDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billOfMaterialDetails: {
        disconnect: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/billOfMaterials")
  @ApiNestedQuery(BillOfMaterialFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BillOfMaterial",
    action: "read",
    possession: "any",
  })
  async findBillOfMaterials(
    @common.Req() request: Request,
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<BillOfMaterial[]> {
    const query = plainToClass(BillOfMaterialFindManyArgs, request.query);
    const results = await this.service.findBillOfMaterials(params.id, {
      ...query,
      select: {
        billOfMaterialTypeId: {
          select: {
            id: true,
          },
        },

        code: true,
        createdAt: true,
        daysToPrepareManufacturingOrder: true,
        endDate: true,
        id: true,
        isActive: true,
        note: true,

        productId: {
          select: {
            id: true,
          },
        },

        productVariantId: {
          select: {
            id: true,
          },
        },

        quantity: true,
        sequence: true,
        startDate: true,

        unitId: {
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

  @common.Post("/:id/billOfMaterials")
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  async connectBillOfMaterials(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: BillOfMaterialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billOfMaterials: {
        connect: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/billOfMaterials")
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  async updateBillOfMaterials(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: BillOfMaterialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billOfMaterials: {
        set: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/billOfMaterials")
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  async disconnectBillOfMaterials(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: BillOfMaterialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billOfMaterials: {
        disconnect: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/productionOrders")
  @ApiNestedQuery(ProductionOrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProductionOrder",
    action: "read",
    possession: "any",
  })
  async findProductionOrders(
    @common.Req() request: Request,
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<ProductionOrder[]> {
    const query = plainToClass(ProductionOrderFindManyArgs, request.query);
    const results = await this.service.findProductionOrders(params.id, {
      ...query,
      select: {
        billOfMaterialId: {
          select: {
            id: true,
          },
        },

        code: true,
        createdAt: true,

        customerId: {
          select: {
            id: true,
          },
        },

        deadlineDate: true,
        description: true,
        finishDate: true,
        id: true,
        name: true,
        normalizedName: true,
        note: true,
        orderDate: true,

        orderStatusId: {
          select: {
            id: true,
          },
        },

        productId: {
          select: {
            id: true,
          },
        },

        productQuantity: true,
        sequenceNumber: true,
        startDate: true,

        storeId: {
          select: {
            id: true,
          },
        },

        unit: {
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

  @common.Post("/:id/productionOrders")
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  async connectProductionOrders(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: ProductionOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productionOrders: {
        connect: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/productionOrders")
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  async updateProductionOrders(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: ProductionOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productionOrders: {
        set: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/productionOrders")
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  async disconnectProductionOrders(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: ProductionOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productionOrders: {
        disconnect: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/products")
  @ApiNestedQuery(ProductFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async findProducts(
    @common.Req() request: Request,
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<Product[]> {
    const query = plainToClass(ProductFindManyArgs, request.query);
    const results = await this.service.findProducts(params.id, {
      ...query,
      select: {
        barcode: true,
        canExpire: true,
        code: true,
        costPrice: true,
        costPriceIncludesTax: true,
        createdAt: true,
        currentStockQuantity: true,
        daysToManufacture: true,

        defaultStoreId: {
          select: {
            id: true,
          },
        },

        defaultUnitId: {
          select: {
            id: true,
          },
        },

        description: true,
        discontinuedDate: true,
        discountRate: true,
        expireAlarmInDays: true,
        expireIsDefaultAfterDaysFromPurchase: true,
        firstStockQuantity: true,
        id: true,
        isActive: true,
        isCompound: true,
        isFavorite: true,
        maintainInventory: true,
        minimumSalePrice: true,
        name: true,
        normalizedName: true,
        note: true,
        photo: true,

        productCategoryId: {
          select: {
            id: true,
          },
        },

        productDepartmentId: {
          select: {
            id: true,
          },
        },

        productGroupId: {
          select: {
            id: true,
          },
        },

        productTypeId: {
          select: {
            id: true,
          },
        },

        profitRate: true,
        reorderQuantity: true,
        salePrice: true,
        salePriceIncludesTax: true,

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

  @common.Post("/:id/products")
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  async connectProducts(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        connect: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/products")
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  async updateProducts(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        set: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/products")
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "update",
    possession: "any",
  })
  async disconnectProducts(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        disconnect: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }
}
