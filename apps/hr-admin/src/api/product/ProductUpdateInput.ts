import { BillOfMaterialDetailUpdateManyWithoutProductsInput } from "./BillOfMaterialDetailUpdateManyWithoutProductsInput";
import { BillOfMaterialUpdateManyWithoutProductsInput } from "./BillOfMaterialUpdateManyWithoutProductsInput";
import { Decimal } from "decimal.js";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { ProductBarcodeUpdateManyWithoutProductsInput } from "./ProductBarcodeUpdateManyWithoutProductsInput";
import { ProductCategoryWhereUniqueInput } from "../productCategory/ProductCategoryWhereUniqueInput";
import { ProductDepartmentWhereUniqueInput } from "../productDepartment/ProductDepartmentWhereUniqueInput";
import { ProductGroupWhereUniqueInput } from "../productGroup/ProductGroupWhereUniqueInput";
import { ProductTypeWhereUniqueInput } from "../productType/ProductTypeWhereUniqueInput";
import { ProductUnitUpdateManyWithoutProductsInput } from "./ProductUnitUpdateManyWithoutProductsInput";
import { ProductVariantUpdateManyWithoutProductsInput } from "./ProductVariantUpdateManyWithoutProductsInput";
import { ProductionOrderUpdateManyWithoutProductsInput } from "./ProductionOrderUpdateManyWithoutProductsInput";
import { PurchaseDetailUpdateManyWithoutProductsInput } from "./PurchaseDetailUpdateManyWithoutProductsInput";
import { PurchaseReturnDetailUpdateManyWithoutProductsInput } from "./PurchaseReturnDetailUpdateManyWithoutProductsInput";
import { SaleDetailUpdateManyWithoutProductsInput } from "./SaleDetailUpdateManyWithoutProductsInput";
import { SaleQuotationDetailUpdateManyWithoutProductsInput } from "./SaleQuotationDetailUpdateManyWithoutProductsInput";
import { SaleReturnDetailUpdateManyWithoutProductsInput } from "./SaleReturnDetailUpdateManyWithoutProductsInput";
import { SaleTaxWhereUniqueInput } from "../saleTax/SaleTaxWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductUpdateInput = {
  barcode?: string | null;
  billOfMaterialDetails?: BillOfMaterialDetailUpdateManyWithoutProductsInput;
  billOfMaterials?: BillOfMaterialUpdateManyWithoutProductsInput;
  canExpire?: boolean;
  code?: string | null;
  costPrice?: Decimal;
  costPriceIncludesTax?: boolean | null;
  currentStockQuantity?: Decimal;
  daysToManufacture?: number | null;
  defaultStoreId?: StoreWhereUniqueInput | null;
  defaultUnitId?: UnitWhereUniqueInput;
  description?: string | null;
  discontinuedDate?: Date | null;
  discountRate?: Decimal | null;
  expireAlarmInDays?: number | null;
  expireIsDefaultAfterDaysFromPurchase?: number | null;
  firstStockQuantity?: Decimal | null;
  isActive?: boolean;
  isCompound?: boolean | null;
  isFavorite?: boolean;
  maintainInventory?: boolean;
  minimumSalePrice?: Decimal | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  photo?: InputJsonValue;
  productBarcodes?: ProductBarcodeUpdateManyWithoutProductsInput;
  productCategoryId?: ProductCategoryWhereUniqueInput | null;
  productDepartmentId?: ProductDepartmentWhereUniqueInput | null;
  productGroupId?: ProductGroupWhereUniqueInput | null;
  productTypeId?: ProductTypeWhereUniqueInput;
  productUnits?: ProductUnitUpdateManyWithoutProductsInput;
  productVariants?: ProductVariantUpdateManyWithoutProductsInput;
  productionOrders?: ProductionOrderUpdateManyWithoutProductsInput;
  profitRate?: Decimal | null;
  purchaseDetails?: PurchaseDetailUpdateManyWithoutProductsInput;
  purchaseReturnDetails?: PurchaseReturnDetailUpdateManyWithoutProductsInput;
  reorderQuantity?: Decimal | null;
  saleDetails?: SaleDetailUpdateManyWithoutProductsInput;
  salePrice?: Decimal;
  salePriceIncludesTax?: boolean;
  saleQuotationDetails?: SaleQuotationDetailUpdateManyWithoutProductsInput;
  saleReturnDetails?: SaleReturnDetailUpdateManyWithoutProductsInput;
  saleTaxId?: SaleTaxWhereUniqueInput | null;
  tenantId?: TenantWhereUniqueInput | null;
};
