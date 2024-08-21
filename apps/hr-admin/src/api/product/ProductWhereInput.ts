import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BillOfMaterialDetailListRelationFilter } from "../billOfMaterialDetail/BillOfMaterialDetailListRelationFilter";
import { BillOfMaterialListRelationFilter } from "../billOfMaterial/BillOfMaterialListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProductBarcodeListRelationFilter } from "../productBarcode/ProductBarcodeListRelationFilter";
import { ProductCategoryWhereUniqueInput } from "../productCategory/ProductCategoryWhereUniqueInput";
import { ProductDepartmentWhereUniqueInput } from "../productDepartment/ProductDepartmentWhereUniqueInput";
import { ProductGroupWhereUniqueInput } from "../productGroup/ProductGroupWhereUniqueInput";
import { ProductTypeWhereUniqueInput } from "../productType/ProductTypeWhereUniqueInput";
import { ProductUnitListRelationFilter } from "../productUnit/ProductUnitListRelationFilter";
import { ProductVariantListRelationFilter } from "../productVariant/ProductVariantListRelationFilter";
import { ProductionOrderListRelationFilter } from "../productionOrder/ProductionOrderListRelationFilter";
import { PurchaseDetailListRelationFilter } from "../purchaseDetail/PurchaseDetailListRelationFilter";
import { PurchaseReturnDetailListRelationFilter } from "../purchaseReturnDetail/PurchaseReturnDetailListRelationFilter";
import { SaleDetailListRelationFilter } from "../saleDetail/SaleDetailListRelationFilter";
import { SaleOrderDetailListRelationFilter } from "../saleOrderDetail/SaleOrderDetailListRelationFilter";
import { SaleQuotationDetailListRelationFilter } from "../saleQuotationDetail/SaleQuotationDetailListRelationFilter";
import { SaleReturnDetailListRelationFilter } from "../saleReturnDetail/SaleReturnDetailListRelationFilter";
import { SaleTaxWhereUniqueInput } from "../saleTax/SaleTaxWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductWhereInput = {
  barcode?: StringNullableFilter;
  billOfMaterialDetails?: BillOfMaterialDetailListRelationFilter;
  billOfMaterials?: BillOfMaterialListRelationFilter;
  canExpire?: BooleanFilter;
  code?: StringNullableFilter;
  costPrice?: DecimalFilter;
  costPriceIncludesTax?: BooleanNullableFilter;
  currentStockQuantity?: DecimalFilter;
  daysToManufacture?: IntNullableFilter;
  defaultStoreId?: StoreWhereUniqueInput;
  defaultUnitId?: UnitWhereUniqueInput;
  description?: StringNullableFilter;
  discontinuedDate?: DateTimeNullableFilter;
  discountRate?: DecimalNullableFilter;
  expireAlarmInDays?: IntNullableFilter;
  expireIsDefaultAfterDaysFromPurchase?: IntNullableFilter;
  firstStockQuantity?: DecimalNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isCompound?: BooleanNullableFilter;
  isFavorite?: BooleanFilter;
  maintainInventory?: BooleanFilter;
  minimumSalePrice?: DecimalNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  photo?: JsonFilter;
  productBarcodes?: ProductBarcodeListRelationFilter;
  productCategoryId?: ProductCategoryWhereUniqueInput;
  productDepartmentId?: ProductDepartmentWhereUniqueInput;
  productGroupId?: ProductGroupWhereUniqueInput;
  productTypeId?: ProductTypeWhereUniqueInput;
  productUnits?: ProductUnitListRelationFilter;
  productVariants?: ProductVariantListRelationFilter;
  productionOrders?: ProductionOrderListRelationFilter;
  profitRate?: DecimalNullableFilter;
  purchaseDetails?: PurchaseDetailListRelationFilter;
  purchaseReturnDetails?: PurchaseReturnDetailListRelationFilter;
  reorderQuantity?: DecimalNullableFilter;
  saleDetails?: SaleDetailListRelationFilter;
  saleOrderDetails?: SaleOrderDetailListRelationFilter;
  salePrice?: DecimalFilter;
  salePriceIncludesTax?: BooleanFilter;
  saleQuotationDetails?: SaleQuotationDetailListRelationFilter;
  saleReturnDetails?: SaleReturnDetailListRelationFilter;
  saleTaxId?: SaleTaxWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
};
