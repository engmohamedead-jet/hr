/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Product } from "./Product";
import { ProductCountArgs } from "./ProductCountArgs";
import { ProductFindManyArgs } from "./ProductFindManyArgs";
import { ProductFindUniqueArgs } from "./ProductFindUniqueArgs";
import { CreateProductArgs } from "./CreateProductArgs";
import { UpdateProductArgs } from "./UpdateProductArgs";
import { DeleteProductArgs } from "./DeleteProductArgs";
import { BillOfMaterialDetailFindManyArgs } from "../../billOfMaterialDetail/base/BillOfMaterialDetailFindManyArgs";
import { BillOfMaterialDetail } from "../../billOfMaterialDetail/base/BillOfMaterialDetail";
import { BillOfMaterialFindManyArgs } from "../../billOfMaterial/base/BillOfMaterialFindManyArgs";
import { BillOfMaterial } from "../../billOfMaterial/base/BillOfMaterial";
import { ProductBarcodeFindManyArgs } from "../../productBarcode/base/ProductBarcodeFindManyArgs";
import { ProductBarcode } from "../../productBarcode/base/ProductBarcode";
import { ProductUnitFindManyArgs } from "../../productUnit/base/ProductUnitFindManyArgs";
import { ProductUnit } from "../../productUnit/base/ProductUnit";
import { ProductVariantFindManyArgs } from "../../productVariant/base/ProductVariantFindManyArgs";
import { ProductVariant } from "../../productVariant/base/ProductVariant";
import { ProductionOrderFindManyArgs } from "../../productionOrder/base/ProductionOrderFindManyArgs";
import { ProductionOrder } from "../../productionOrder/base/ProductionOrder";
import { PurchaseDetailFindManyArgs } from "../../purchaseDetail/base/PurchaseDetailFindManyArgs";
import { PurchaseDetail } from "../../purchaseDetail/base/PurchaseDetail";
import { PurchaseReturnDetailFindManyArgs } from "../../purchaseReturnDetail/base/PurchaseReturnDetailFindManyArgs";
import { PurchaseReturnDetail } from "../../purchaseReturnDetail/base/PurchaseReturnDetail";
import { SaleDetailFindManyArgs } from "../../saleDetail/base/SaleDetailFindManyArgs";
import { SaleDetail } from "../../saleDetail/base/SaleDetail";
import { SaleOrderDetailFindManyArgs } from "../../saleOrderDetail/base/SaleOrderDetailFindManyArgs";
import { SaleOrderDetail } from "../../saleOrderDetail/base/SaleOrderDetail";
import { SaleQuotationDetailFindManyArgs } from "../../saleQuotationDetail/base/SaleQuotationDetailFindManyArgs";
import { SaleQuotationDetail } from "../../saleQuotationDetail/base/SaleQuotationDetail";
import { SaleReturnDetailFindManyArgs } from "../../saleReturnDetail/base/SaleReturnDetailFindManyArgs";
import { SaleReturnDetail } from "../../saleReturnDetail/base/SaleReturnDetail";
import { Store } from "../../store/base/Store";
import { Unit } from "../../unit/base/Unit";
import { ProductCategory } from "../../productCategory/base/ProductCategory";
import { ProductDepartment } from "../../productDepartment/base/ProductDepartment";
import { ProductGroup } from "../../productGroup/base/ProductGroup";
import { ProductType } from "../../productType/base/ProductType";
import { SaleTax } from "../../saleTax/base/SaleTax";
import { Tenant } from "../../tenant/base/Tenant";
import { ProductService } from "../product.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Product)
export class ProductResolverBase {
  constructor(
    protected readonly service: ProductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async _productsMeta(
    @graphql.Args() args: ProductCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Product])
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async products(
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    return this.service.products(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Product, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "own",
  })
  async product(
    @graphql.Args() args: ProductFindUniqueArgs
  ): Promise<Product | null> {
    const result = await this.service.product(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Product)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "create",
    possession: "any",
  })
  async createProduct(
    @graphql.Args() args: CreateProductArgs
  ): Promise<Product> {
    return await this.service.createProduct({
      ...args,
      data: {
        ...args.data,

        defaultStoreId: args.data.defaultStoreId
          ? {
              connect: args.data.defaultStoreId,
            }
          : undefined,

        defaultUnitId: {
          connect: args.data.defaultUnitId,
        },

        productCategoryId: args.data.productCategoryId
          ? {
              connect: args.data.productCategoryId,
            }
          : undefined,

        productDepartmentId: args.data.productDepartmentId
          ? {
              connect: args.data.productDepartmentId,
            }
          : undefined,

        productGroupId: args.data.productGroupId
          ? {
              connect: args.data.productGroupId,
            }
          : undefined,

        productTypeId: {
          connect: args.data.productTypeId,
        },

        saleTaxId: args.data.saleTaxId
          ? {
              connect: args.data.saleTaxId,
            }
          : undefined,

        tenantId: args.data.tenantId
          ? {
              connect: args.data.tenantId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Product)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  async updateProduct(
    @graphql.Args() args: UpdateProductArgs
  ): Promise<Product | null> {
    try {
      return await this.service.updateProduct({
        ...args,
        data: {
          ...args.data,

          defaultStoreId: args.data.defaultStoreId
            ? {
                connect: args.data.defaultStoreId,
              }
            : undefined,

          defaultUnitId: {
            connect: args.data.defaultUnitId,
          },

          productCategoryId: args.data.productCategoryId
            ? {
                connect: args.data.productCategoryId,
              }
            : undefined,

          productDepartmentId: args.data.productDepartmentId
            ? {
                connect: args.data.productDepartmentId,
              }
            : undefined,

          productGroupId: args.data.productGroupId
            ? {
                connect: args.data.productGroupId,
              }
            : undefined,

          productTypeId: {
            connect: args.data.productTypeId,
          },

          saleTaxId: args.data.saleTaxId
            ? {
                connect: args.data.saleTaxId,
              }
            : undefined,

          tenantId: args.data.tenantId
            ? {
                connect: args.data.tenantId,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Product)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "delete",
    possession: "any",
  })
  async deleteProduct(
    @graphql.Args() args: DeleteProductArgs
  ): Promise<Product | null> {
    try {
      return await this.service.deleteProduct(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [BillOfMaterialDetail], {
    name: "billOfMaterialDetails",
  })
  @nestAccessControl.UseRoles({
    resource: "BillOfMaterialDetail",
    action: "read",
    possession: "any",
  })
  async findBillOfMaterialDetails(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: BillOfMaterialDetailFindManyArgs
  ): Promise<BillOfMaterialDetail[]> {
    const results = await this.service.findBillOfMaterialDetails(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [BillOfMaterial], { name: "billOfMaterials" })
  @nestAccessControl.UseRoles({
    resource: "BillOfMaterial",
    action: "read",
    possession: "any",
  })
  async findBillOfMaterials(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: BillOfMaterialFindManyArgs
  ): Promise<BillOfMaterial[]> {
    const results = await this.service.findBillOfMaterials(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductBarcode], { name: "productBarcodes" })
  @nestAccessControl.UseRoles({
    resource: "ProductBarcode",
    action: "read",
    possession: "any",
  })
  async findProductBarcodes(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: ProductBarcodeFindManyArgs
  ): Promise<ProductBarcode[]> {
    const results = await this.service.findProductBarcodes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductUnit], { name: "productUnits" })
  @nestAccessControl.UseRoles({
    resource: "ProductUnit",
    action: "read",
    possession: "any",
  })
  async findProductUnits(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: ProductUnitFindManyArgs
  ): Promise<ProductUnit[]> {
    const results = await this.service.findProductUnits(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductVariant], { name: "productVariants" })
  @nestAccessControl.UseRoles({
    resource: "ProductVariant",
    action: "read",
    possession: "any",
  })
  async findProductVariants(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: ProductVariantFindManyArgs
  ): Promise<ProductVariant[]> {
    const results = await this.service.findProductVariants(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductionOrder], { name: "productionOrders" })
  @nestAccessControl.UseRoles({
    resource: "ProductionOrder",
    action: "read",
    possession: "any",
  })
  async findProductionOrders(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: ProductionOrderFindManyArgs
  ): Promise<ProductionOrder[]> {
    const results = await this.service.findProductionOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PurchaseDetail], { name: "purchaseDetails" })
  @nestAccessControl.UseRoles({
    resource: "PurchaseDetail",
    action: "read",
    possession: "any",
  })
  async findPurchaseDetails(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: PurchaseDetailFindManyArgs
  ): Promise<PurchaseDetail[]> {
    const results = await this.service.findPurchaseDetails(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PurchaseReturnDetail], {
    name: "purchaseReturnDetails",
  })
  @nestAccessControl.UseRoles({
    resource: "PurchaseReturnDetail",
    action: "read",
    possession: "any",
  })
  async findPurchaseReturnDetails(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: PurchaseReturnDetailFindManyArgs
  ): Promise<PurchaseReturnDetail[]> {
    const results = await this.service.findPurchaseReturnDetails(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SaleDetail], { name: "saleDetails" })
  @nestAccessControl.UseRoles({
    resource: "SaleDetail",
    action: "read",
    possession: "any",
  })
  async findSaleDetails(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: SaleDetailFindManyArgs
  ): Promise<SaleDetail[]> {
    const results = await this.service.findSaleDetails(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SaleOrderDetail], { name: "saleOrderDetails" })
  @nestAccessControl.UseRoles({
    resource: "SaleOrderDetail",
    action: "read",
    possession: "any",
  })
  async findSaleOrderDetails(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: SaleOrderDetailFindManyArgs
  ): Promise<SaleOrderDetail[]> {
    const results = await this.service.findSaleOrderDetails(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SaleQuotationDetail], {
    name: "saleQuotationDetails",
  })
  @nestAccessControl.UseRoles({
    resource: "SaleQuotationDetail",
    action: "read",
    possession: "any",
  })
  async findSaleQuotationDetails(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: SaleQuotationDetailFindManyArgs
  ): Promise<SaleQuotationDetail[]> {
    const results = await this.service.findSaleQuotationDetails(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SaleReturnDetail], { name: "saleReturnDetails" })
  @nestAccessControl.UseRoles({
    resource: "SaleReturnDetail",
    action: "read",
    possession: "any",
  })
  async findSaleReturnDetails(
    @graphql.Parent() parent: Product,
    @graphql.Args() args: SaleReturnDetailFindManyArgs
  ): Promise<SaleReturnDetail[]> {
    const results = await this.service.findSaleReturnDetails(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Store, {
    nullable: true,
    name: "defaultStoreId",
  })
  @nestAccessControl.UseRoles({
    resource: "Store",
    action: "read",
    possession: "any",
  })
  async getDefaultStoreId(
    @graphql.Parent() parent: Product
  ): Promise<Store | null> {
    const result = await this.service.getDefaultStoreId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Unit, {
    nullable: true,
    name: "defaultUnitId",
  })
  @nestAccessControl.UseRoles({
    resource: "Unit",
    action: "read",
    possession: "any",
  })
  async getDefaultUnitId(
    @graphql.Parent() parent: Product
  ): Promise<Unit | null> {
    const result = await this.service.getDefaultUnitId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ProductCategory, {
    nullable: true,
    name: "productCategoryId",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductCategory",
    action: "read",
    possession: "any",
  })
  async getProductCategoryId(
    @graphql.Parent() parent: Product
  ): Promise<ProductCategory | null> {
    const result = await this.service.getProductCategoryId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ProductDepartment, {
    nullable: true,
    name: "productDepartmentId",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductDepartment",
    action: "read",
    possession: "any",
  })
  async getProductDepartmentId(
    @graphql.Parent() parent: Product
  ): Promise<ProductDepartment | null> {
    const result = await this.service.getProductDepartmentId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ProductGroup, {
    nullable: true,
    name: "productGroupId",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductGroup",
    action: "read",
    possession: "any",
  })
  async getProductGroupId(
    @graphql.Parent() parent: Product
  ): Promise<ProductGroup | null> {
    const result = await this.service.getProductGroupId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ProductType, {
    nullable: true,
    name: "productTypeId",
  })
  @nestAccessControl.UseRoles({
    resource: "ProductType",
    action: "read",
    possession: "any",
  })
  async getProductTypeId(
    @graphql.Parent() parent: Product
  ): Promise<ProductType | null> {
    const result = await this.service.getProductTypeId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SaleTax, {
    nullable: true,
    name: "saleTaxId",
  })
  @nestAccessControl.UseRoles({
    resource: "SaleTax",
    action: "read",
    possession: "any",
  })
  async getSaleTaxId(
    @graphql.Parent() parent: Product
  ): Promise<SaleTax | null> {
    const result = await this.service.getSaleTaxId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Tenant, {
    nullable: true,
    name: "tenantId",
  })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "any",
  })
  async getTenantId(@graphql.Parent() parent: Product): Promise<Tenant | null> {
    const result = await this.service.getTenantId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
